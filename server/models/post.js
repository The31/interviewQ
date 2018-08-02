import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import mongoosastic from 'mongoosastic';
import { getElasticInstance } from '../elasticSearch';


const Question = new Schema({
  title: String,
  body: String,
  author: String,
});


const PostSchema = new Schema({
  name: { type: 'String', required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question',
  es_schema: Question, es_indexed: true, es_select: 'question body' },
  content: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  counter: { type: 'Number', required: true },
});


PostSchema.plugin(mongoosastic, {
  esClient: getElasticInstance(),
  populate: [
    { path: 'question', select: 'question body' },
  ],
});

export default mongoose.model('Post', PostSchema);


// ... your schema defination

