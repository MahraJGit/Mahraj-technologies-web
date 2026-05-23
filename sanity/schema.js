import post from './schemas/post.js';
import job from './schemas/job.js';
import author from './schemas/author.js';
import HTMLEmbed from './schemas/HTMLEmbed.js';

export const schema = {
  types: [post, job, author, HTMLEmbed],
};
