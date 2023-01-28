import {surpriseMePrompts} from '../constants'

export function getRandomPrompt(prompt){
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length)
    const randomprompt=surpriseMePrompts[randomIndex]
    if(randomprompt===prompt) return getRandomPrompt(prompt)
    return randomprompt
}