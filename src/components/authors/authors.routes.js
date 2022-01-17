import express from 'express';

import AuthorsController from './authors.controller';

const router = express.Router();

// get all authors
router.get('/', AuthorsController.getAuthors);

// create author
router.post('/', AuthorsController.createAuthor);

// get single author
router.get('/:authorId', AuthorsController.getAuthor);

export default router;
