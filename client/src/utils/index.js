import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver'
export function getRandomPrompt(prompt){
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length)
    const randomprompt=surpriseMePrompts[randomIndex]
    if(randomprompt===prompt) return getRandomPrompt(prompt)
    return randomprompt
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpeg`)
}