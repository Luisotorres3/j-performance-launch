"""Render a 30 s vertical launch film from real browser captures.
Run capture-story.mjs first, then this file. Outputs stay in video-output.local.
Requires Pillow, numpy and imageio-ffmpeg (local tools directory supported).
"""
from pathlib import Path
import sys, math, subprocess, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'video-output.local'
sys.path.insert(0, str(OUT / 'tools'))
import imageio_ffmpeg
W,H,FPS,DURATION = 1080,1920,30,30
GOLD = '#f3bf31'
WHITE = '#f6f7f8'
MUTED = '#a7b6c9'
def font(size, bold=False):
    return ImageFont.truetype('C:/Windows/Fonts/impact.ttf' if bold else 'C:/Windows/Fonts/arial.ttf',size)
FONTS={s:font(s,b) for s,b in [(24,False),(28,False),(32,False),(38,False),(42,False),(52,False),(76,True),(96,True),(120,True),(152,True)]}
def text(draw,xy,words,size=32,fill=WHITE):
    draw.text(xy,words,font=FONTS[size],fill=fill)
def ease(x):
    x=max(0,min(1,x)); return 1-(1-x)**3
yy,xx=np.mgrid[0:H,0:W]
glow=np.exp(-((xx-950)**2/(750**2)+(yy-850)**2/(1100**2)))
bg=np.zeros((H,W,3),dtype=np.uint8)
for c,(a,b) in enumerate([(6,11),(13,24),(24,42)]):bg[:,:,c]=a+b*glow
BG=Image.fromarray(bg)
captures={p.stem:Image.open(p).convert('RGB') for p in (OUT/'captures').glob('*.png')}
portrait=Image.open(ROOT/'src/assets/juan-personal.webp').convert('RGBA')
logo=Image.open(ROOT/'src/assets/jps-white.webp').convert('RGBA')
logo=logo.crop(logo.getbbox()); logo.thumbnail((240,180))
SCENES=[
    (0,3,'intro','NUEVA WEB','TU PRÓXIMO NIVEL','SE ENTRENA.',0,0),
    (3,8,'home','01 / BIENVENIDO','EMPIEZA AHORA.','EMPIEZA DE VERDAD.',0,510),
    (8,12,'plans','02 / TU ENTRENAMIENTO','UN PLAN','A TU MEDIDA.',120,580),
    (12,15,'strength','FUERZA / RUNNING / OPOSICIONES','ELIGE TU','SIGUIENTE OBJETIVO.',270,680),
    (15,19,'clients','03 / CLIENTES','EL TRABAJO','SE COMPARTE.',180,1050),
    (19,23,'challenges','04 / RETOS','MÁS RETOS.','MÁS MOTIVACIÓN.',80,680),
    (23,26,'contact','05 / CONTACTO','EL PRIMER PASO','EMPIEZA CONTIGO.',100,500),
    (26,30,'outro','J PERFORMANCE SYSTEM','EMPIEZA','DE VERDAD.',0,0),
]
def frame(t):
    im=BG.copy(); d=ImageDraw.Draw(im)
    # Moving track lines and a restrained technical grid.
    for x in range(-1200,1800,180):
        k=int((t*35)%180);d.line((x+k,1920,x+1000+k,0),fill='#142338',width=2)
    d.ellipse((690,300,1550,1160),outline='#263649',width=2)
    d.ellipse((610,220,1630,1240),outline='#1c2d42',width=2)
    for i in range(6):
        x=int((i*243+t*120)%1450)-200
        d.line((x,1760,x+140,1620),fill='#9d791e' if i==2 else '#23384f',width=3)
    scene=next(s for s in SCENES if s[0]<=t<s[1]);start,end,name,kicker,line1,line2,a,b=scene
    local=t-start; p=local/(end-start); ent=ease(local/.65)
    text(d,(76,194),'J PERFORMANCE',28);text(d,(775,194),'WEB / 2026',24,MUTED)
    d.line((76,244,1004,244),fill='#324154',width=2)
    if name in ('intro','outro'):
        if name=='intro':
            pic=portrait.resize((1060,1060),Image.Resampling.LANCZOS)
            im.paste(pic,(int(50+(1-ent)*180),550),pic)
            # Darken the lower portrait for clean supporting typography.
            shade=Image.new('RGBA',(W,H))
            sd=ImageDraw.Draw(shade)
            for y in range(1150,1730):sd.line((0,y,W,y),fill=(6,13,24,int(230*(y-1150)/580)))
            im=Image.alpha_composite(im.convert('RGBA'),shade).convert('RGB');d=ImageDraw.Draw(im)
        else:
            mark=logo.resize((logo.width*2,logo.height*2),Image.Resampling.LANCZOS)
            im.paste(mark,((W-mark.width)//2,400),mark);d=ImageDraw.Draw(im)
        top=300 if name=='intro' else 820
        text(d,(76,top),kicker,28,GOLD)
        offset=int((1-ent)*80)
        text(d,(76,top+65+offset),line1,96 if name=='intro' else 152)
        text(d,(76,top+180+offset),line2,120 if name=='intro' else 152,GOLD)
        if name=='intro':
            text(d,(76,1500),'ENTRENAMIENTO. MÉTODO. PROGRESO.',32)
            text(d,(76,1565),'Descubre J Performance System  ↗',32,MUTED)
        else:
            d.rounded_rectangle((76,1270,1004,1400),radius=24,fill=GOLD)
            text(d,(116,1310),'jperformancesystem.es',52,'#0a1423')
            text(d,(76,1480),'Tu próximo nivel se entrena.',42)
            text(d,(76,1550),'DESCUBRE LA WEB',28,GOLD)
    else:
        offset=int((1-ent)*65)
        text(d,(76,285+offset),kicker,24,GOLD)
        text(d,(76,334+offset),line1,96)
        text(d,(76,447+offset),line2,76,GOLD)
        # Real website, smoothly explored inside a floating browser card.
        cw,ch=900,1060
        source=captures[name]
        sy=int(a+(b-a)*(p*p*(3-2*p)))
        sourceheight=round(ch*source.width/cw)
        crop=source.crop((0,sy,source.width,sy+sourceheight)).resize((cw,ch),Image.Resampling.LANCZOS)
        card=Image.new('RGBA',(cw+12,ch+72),(0,0,0,0));cd=ImageDraw.Draw(card)
        cd.rounded_rectangle((0,0,cw+11,ch+71),radius=24,fill='#e3e8ee')
        cd.rounded_rectangle((6,6,cw+5,65),radius=19,fill='#edf0f3')
        for j in range(3):cd.ellipse((25+j*22,26,35+j*22,36),fill=['#c9a343','#8897a8','#8897a8'][j])
        cd.text((145,18),'jperformancesystem.es'+('' if name=='home' else '/'+{'plans':'planes','strength':'planes','clients':'futbolistas','challenges':'retos','contact':'contacto'}[name]),font=FONTS[24],fill='#3c4c60')
        card.paste(crop,(6,66))
        mask=Image.new('L',card.size,0);ImageDraw.Draw(mask).rounded_rectangle((0,0,card.width-1,card.height-1),24,fill=255);card.putalpha(mask)
        angle=.65*math.sin(p*math.pi*2) if name not in ('plans','strength') else -.35
        card=card.rotate(angle,resample=Image.Resampling.BICUBIC,expand=True)
        x=(W-card.width)//2; y=586+int(10*math.sin(p*math.pi*2)) + int((1-ent)*110)
        shadow=Image.new('RGBA',im.size);sd=ImageDraw.Draw(shadow);sd.rounded_rectangle((x-8,y+25,x+card.width+8,y+card.height+35),32,fill=(0,0,0,110));shadow=shadow.filter(ImageFilter.GaussianBlur(18))
        im=Image.alpha_composite(im.convert('RGBA'),shadow);im.alpha_composite(card,(x,y));im=im.convert('RGB');d=ImageDraw.Draw(im)
    # Persistent progress, inside story UI safe margins.
    for j in range(8):
        x=76+j*118;d.rounded_rectangle((x,1780,x+103,1785),radius=2,fill='#344154')
        s=SCENES[j];q=max(0,min(1,(t-s[0])/(s[1]-s[0])))
        if q:d.rounded_rectangle((x,1780,x+int(103*q),1785),radius=2,fill=GOLD)
    if start>0 and local<.32:
        edge=int(W*ease(local/.32)); d.polygon([(edge-220,0),(edge+100,0),(edge-250,H),(edge-570,H)],fill=GOLD)
    return im

def soundtrack():
    sr=48000;n=sr*DURATION;mix=np.zeros(n,dtype=np.float64);rng=np.random.default_rng(19)
    def add(start,sound,gain=1):
        i=int(start*sr);end=min(n,i+len(sound))
        if i<n:mix[i:end]+=sound[:end-i]*gain
    for beat in np.arange(0,DURATION,.5):
        t=np.arange(int(sr*.33))/sr
        kick=np.sin(2*np.pi*(49*t+55*.024*(1-np.exp(-t/.024))))*np.exp(-t*16)
        add(beat,kick,.45)
        ht=np.arange(int(sr*.065))/sr;noise=rng.normal(size=len(ht));noise=np.r_[0,np.diff(noise)]
        add(beat+.25,noise*np.exp(-ht*75),.038)
        if round(beat*2)%2:
            st=np.arange(int(sr*.16))/sr
            add(beat,rng.normal(size=len(st))*np.exp(-st*32),.09)
    notes=[55,65.406,73.416,49]
    for k,start in enumerate(np.arange(0,DURATION,.25)):
        t=np.arange(int(sr*.22))/sr;f=notes[int(start//4)%4]
        bass=np.sin(2*np.pi*f*t)+.23*np.sin(2*np.pi*f*2*t)
        add(start,bass*np.minimum(1,t/.01)*np.exp(-t*12),.16 if k%2==0 else .07)
        arp=f*4*[1,1.5,2,1.25][k%4]
        add(start,np.sin(2*np.pi*arp*t)*np.minimum(1,t/.008)*np.exp(-t*20),.055)
    for start,*_ in SCENES[1:]:
        t=np.arange(int(sr*.32))/sr
        swoosh=rng.normal(size=len(t));swoosh=np.convolve(swoosh,np.ones(8)/8,mode='same')
        add(start,swoosh*np.sin(np.pi*t/.32)**2,.1)
    fade=np.minimum(1,np.arange(n)/(sr*.7))*np.minimum(1,(n-np.arange(n))/(sr*1.1))
    mix=np.tanh(mix)*fade*.8
    stereo=np.stack([mix,mix],axis=1)
    with wave.open(str(OUT/'original-soundtrack.wav'),'wb') as f:
        f.setnchannels(2);f.setsampwidth(2);f.setframerate(sr);f.writeframes((stereo*32767).astype('<i2').tobytes())

if __name__=='__main__':
    OUT.mkdir(exist_ok=True)
    samples=[1.6,5.5,10,13.5,17,21,24.5,28.3]
    sheet=Image.new('RGB',(1080,960),'#07101e')
    for i,t in enumerate(samples):sheet.paste(frame(t).resize((270,480),Image.Resampling.LANCZOS),((i%4)*270,(i//4)*480))
    sheet.save(OUT/'storyboard.jpg',quality=92)
    frame(28.3).save(OUT/'portada.jpg',quality=95)
    if '--preview' in sys.argv:sys.exit(0)
    soundtrack()
    cmd=[imageio_ffmpeg.get_ffmpeg_exe(),'-y','-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s','1080x1920','-r',str(FPS),'-i','-','-i',str(OUT/'original-soundtrack.wav'),'-c:v','libx264','-preset','fast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-movflags','+faststart','-t',str(DURATION),str(OUT/'J-Performance-Instagram-Story.mp4')]
    with open(OUT/'render.log','w') as log:
        proc=subprocess.Popen(cmd,stdin=subprocess.PIPE,stderr=log)
        for i in range(FPS*DURATION):
            proc.stdin.write(frame(i/FPS).tobytes())
            if i%90==0:print(f'Render {i//FPS}/{DURATION}s',flush=True)
        proc.stdin.close();rc=proc.wait()
        if rc:raise RuntimeError(f'FFmpeg failed: {rc}')
    print('MP4 complete',flush=True)
