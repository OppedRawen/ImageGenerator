import {surprisemePrompts} from '../constants';
export function getRandomPrompt(promt){
    const randomIndex = Math.floor(Math.random() * surprisemePrompts.length);
    const randomPrompt = surprisemePrompts[randomIndex];
    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}