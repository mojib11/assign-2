const path = require('path')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
  
      cb(null,path.resolve(__dirname,'..','file'));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });


exports.StPhoto = async(req,res)=>{

    const moveFile=upload.single('stImg');
    await new Promise((res,rej)=>{
        moveFile(req,{},(err)=>{

            if(err){
                rej(err)
            }else{
                res()
            }
        })
    })
}