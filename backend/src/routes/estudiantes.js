const {Router}=require('express');
const router = Router();

const {getEstudiantes,getEstudiante,postEstudiante,putEstudiante,deleteEstudiante} = require ('../controllers/estudiantesControl.js');

router.route('/').get(getEstudiantes)

router.route('/')
    .get(getEstudiantes)
    .post(postEstudiante);

router.route('/:id')
    .get(getEstudiante)
    .put(putEstudiante)
    .delete(deleteEstudiante);
module.exports = router
