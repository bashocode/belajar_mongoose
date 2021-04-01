const { character } = require('../models');

class CharacterController {
  async getAllCharacter(req, res, next) {
    try {
      let charas = await character.find({ is_deleted: false });
      console.log('success', charas);

      res.status(200).json({
        result: charas
      });
    } catch (error) {
      console.log('error', error);
      res.status(400).json({
        error: error
      });
    }
  }

  async insertCharacter(req, res, next) {
    try {
      let { name, element } = req.body;
      let chara = await character.create({ name, element });
      
      console.log('success', chara);
      res.status(201).json({
        result: chara
      });
    } catch (error) {
      console.log('error', error);
      res.status(400).json({
        error: error
      });
    }
  }

  async updateChara(req, res, next) {
    try {
      let { id } = req.params;
      let { name, element } = req.body;

      let filter = { _id: id };
      let data = { name, element };
      // options new for returning updated value
      let options = { new: true };
      
      let updateChara = await character.findOneAndUpdate(filter, data, options);
      console.log('success', updateChara);

      res.status(200).json({
        result: updateChara
      });
    } catch (error) {
      console.log('error', error);
      res.status(400).json({
        error: error
      });
    }
  }

  async softDelete(req, res, next) {
    try {
      let { id } = req.params;
      let filter = { _id: id };
      let data = { is_deleted: true };
      // options new for returning updated value
      let options = { new: true };
      
      let softDeleteChara = await character.findOneAndUpdate(filter, data, options);
      console.log('success', softDeleteChara);

      res.status(200).json({
        result: softDeleteChara
      });
    } catch (error) {
      console.log('error', error);
      res.status(400).json({
        error: error
      });
    }
  }
  
  async hardDelete(req, res, next) {
    try {
      let { id } = req.params;
      let filter = { _id: id };
      
      let hardDeleteChara = await character.deleteOne(filter);
      console.log('success', hardDeleteChara);

      res.status(200).json({
        result: hardDeleteChara
      });
    } catch (error) {
      console.log('error', error);
      res.status(400).json({
        error: error
      });
    }
  }
}

module.exports = CharacterController;
