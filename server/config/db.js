import mongoosee from 'mongoose';

export default () => {
  mongoosee.Promise = global.Promise;
  mongoosee.connect('mongodb://localhost/meetupME');
  mongoosee.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));
};
