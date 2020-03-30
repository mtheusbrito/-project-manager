"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", table => {
      table.increments();
      table.timestamps();
      table.string("title").notNullable();
      table
        .integer("team_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("teams")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;
