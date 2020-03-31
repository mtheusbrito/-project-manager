"use strict";

class TeamController {
  async index({ auth }) {
    const teams = await auth.user.teams().fetch();
    return teams;
  }

  async create({ request, response, view }) {}

  async store({ request, auth }) {
    const data = request.only(["name"]);
    const team = await auth.user.teams().create({
      ...data,
      user_id: auth.user.id
    });
    return team;
  }

  /**
   * Display a single team.
   * GET teams/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, auth }) {
    const team = await auth.user
      .teams()
      .where("teams.id", params.id)
      .first();

    return team;
  }

  async edit({ params, request, response, view }) {}

  async update({ params, request, auth }) {
    const data = request.only(["name"]);
    const team = await auth.user
      .teams()
      .where("teams.id", params.id)
      .first();

    team.merge(data);
    await team.save();

    return team;
  }

  async destroy({ params, auth }) {
    const team = await auth.user
      .teams()
      .where("teams.id", params.id)
      .first();
      await team.delete();
      
  }
}

module.exports = TeamController;
