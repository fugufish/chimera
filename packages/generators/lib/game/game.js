const path = require("path");

const ld = require("lodash");
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your world's name",
      },
    ]).then((answers) => (this.answers = answers));
  }

  writing() {
    console.log(path.join(process.cwd(), ld.kebabCase(this.answers.name)));
    this.destinationRoot(
      path.join(process.cwd(), ld.kebabCase(this.answers.name))
    );
    console.log(this.destinationRoot());
    this.sourceRoot(
      path.join(
        path.join(
          this.templatePath(),
          "..",
          "packages",
          "generators",
          "lib",
          "game",
          "templates"
        )
      )
    );
    this.fs.copyTpl(this.templatePath("dotenv"), this.destinationPath(".env"), {
      name: this.answers.name,
    });

    this.fs.copyTpl(
      this.templatePath("docker-compose.yml"),
      this.destinationPath("docker-compose.yml")
    );

    this.fs.copyTpl(
      this.templatePath("config/game.js"),
      this.destinationPath("config/game.js")
    );

    this.fs.copyTpl(
      this.templatePath("config/plugin.js"),
      this.destinationPath("config/plugin.js")
    );
  }
};
