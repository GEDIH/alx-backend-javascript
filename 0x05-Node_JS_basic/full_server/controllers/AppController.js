/**
 * Contains the miscellaneous route handlers.
 * @author Hambisa Adamu <https://github.com/GEDIH>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
