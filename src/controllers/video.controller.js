const videoCtrl = {}

const Video = require('../models/Video')

videoCtrl.getVideo = async(req, res)=>{
    const videos = await Video.find()
    res.json(videos)
}

videoCtrl.createVideo = async(req, res)=>{
    const {titulo, descripcion, url} = req.body;
    const newVideo = new Video({
        titulo: titulo,
        descripcion,
        url
    })
    await newVideo.save()
    res.send('enlace guardado')
}

videoCtrl.getVideoOne = async(req, res)=>{
    const oneVideo = await Video.findById(req.params.id);
    res.json(oneVideo)
}

videoCtrl.deleteVideo = async(req, res)=>{
    await Video.findByIdAndDelete(req.params.id)
    res.send('el enlace ha sido eliminado')
}

videoCtrl.putVideo = async(req, res)=>{
    const {titulo, descripcion, url} = req.body;
    await Video.findByIdAndUpdate(req.params.id, {
        titulo,
        descripcion,
        url
    })
    res.send('enlace ha sido actualizado')
}

module.exports=videoCtrl;