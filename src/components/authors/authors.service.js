import authorDAO from './authors.dao';

class AuthorsService {
  findAll() {
    return authorDAO.findAll();
  }

  findOne(id) {
    return authorDAO.findOne(id);
  }

  async create(data) {
    return authorDAO.create(data);
  }
}

export default new AuthorsService();
