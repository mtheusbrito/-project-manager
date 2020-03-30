"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Invite extends Model {
  //Usuario que criou o invite, usuario que está convidando
  user() {
    return this.belongsTo("App/Models/User");
  }
  //Refere-se ao time que a pessoa esta sendo convidado
  team() {
    return this.belongsTo("App/Models/Team");
  }
}

module.exports = Invite;
