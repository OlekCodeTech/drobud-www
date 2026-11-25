"""Build produkcyjny DroBud pod Hostinger: eksport z indeksacją dla https://drobudwielun.pl + ZIP do wgrania do public_html.
Uruchom: python tools/build_prod.py  -> dist/drobudwielun-RRRRMMDD.zip
"""
import datetime, os, pathlib, shutil, subprocess, sys, zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
env = dict(os.environ, NEXT_PUBLIC_SITE_URL="https://drobudwielun.pl", NEXT_PUBLIC_INDEX="1")
env.pop("NEXT_PUBLIC_BASE_PATH", None)
shutil.rmtree(ROOT / "out", ignore_errors=True)
subprocess.run("npm run build", shell=True, cwd=ROOT, env=env, check=True)

out = ROOT / "out"
assert (out / ".htaccess").exists(), "brak .htaccess w out/"
dist = ROOT / "dist"
dist.mkdir(exist_ok=True)
zpath = dist / f"drobudwielun-{datetime.date.today():%Y%m%d}.zip"
with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(out.rglob("*")):
        if f.is_file():
            z.write(f, f.relative_to(out).as_posix())
with zipfile.ZipFile(zpath) as z:
    bad = z.testzip()
    assert bad is None, f"uszkodzony plik w ZIP: {bad}"
    print(f"OK {zpath} ({len(z.namelist())} plików, {zpath.stat().st_size / 1e6:.1f} MB)")
