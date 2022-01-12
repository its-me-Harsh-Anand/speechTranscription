//Initialize it as GIT repository
//Install deepgram/sdk by npm i @deepgram/sdk
//And you are good to go for pre-recorded transcription

const audioFileUrl = 'https://static.deepgram.com/examples/deep-learning-podcast-clip.wav';

const express = require("express");
const app = express();
app.use(express.static("public"));

// const DG_KEY = your api key from deepgram 

const {Deepgram} = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)

deepgram.transcription.preRecorded(
  { url : audioFileUrl },
  { punctuate : true , utterances : true , diarize : true}

).then(data=>{
  console.dir(data.results.utterances, {depth : null})
})

const listener = app.listen((3000 || process.env.PORT), console.log("Listening at " + process.env.PORT));