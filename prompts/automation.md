# AI Prompt to Automate making my website

**Images files:**
[Insert file names here use `file-showcase-list.bat`]

**File path:**
[Insert file path here use]

Use `srcset` to make `Img tags` responsive to layout and resolution

Each Extension in the file name describes the width of the image

xsm = 300w
sm = 500w
md = 800w
lg = 1080w

**Template:**

<img 
src="image-xsm.jpg" 
srcset="
 image-xsm.jpg 300w,
 image-sm.jpg 500w,
 image-md.jpg 800w,
 image-lg.jpg 1080w
 " 
sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 33vw"
 alt="Description of the image"
 loading="lazy" class="image-style">

Provide one html file downloadable
