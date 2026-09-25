"""Decode the entire export, inspect its streams and make a silent copy."""
from pathlib import Path
import sys, subprocess, json
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'video-output.local'
sys.path.insert(0,str(OUT/'tools'))
import imageio_ffmpeg
ffmpeg=imageio_ffmpeg.get_ffmpeg_exe()
source=OUT/'J-Performance-Instagram-Story.mp4'
result=subprocess.run([ffmpeg,'-v','error','-i',str(source),'-f','null','-'],capture_output=True,text=True)
if result.returncode or result.stderr.strip():
    raise RuntimeError(result.stderr)
reader=imageio_ffmpeg.read_frames(str(source))
metadata=next(reader)
reader.close()
assert metadata['size']==(1080,1920),metadata
assert metadata['fps']==30,metadata
assert abs(metadata['duration']-30)<.1,metadata
subprocess.run([ffmpeg,'-v','error','-y','-i',str(source),'-c:v','copy','-an','-movflags','+faststart',str(OUT/'J-Performance-Story-sin-musica.mp4')],check=True)
subprocess.run([ffmpeg,'-v','error','-y','-ss','10','-i',str(source),'-frames:v','1',str(OUT/'verificacion-mp4.jpg')],check=True)
(OUT/'verification.json').write_text(json.dumps({'full_decode':'passed','metadata':metadata,'bytes':source.stat().st_size},indent=2),encoding='utf-8')
print(json.dumps(metadata,indent=2))
print(f'Full decode passed. Size: {source.stat().st_size / 1024 / 1024:.1f} MiB')
