function windWhispers(s){
    if (s !== '') {
        // remove all leading or trailing spaces
        s = s.trim();
        let whisper = s;

        // find all non-alphanumeric, non-whitespace characters
        let nonAlphanumeric = s.match(/[^a-z0-9\s]+/gi);
        if (nonAlphanumeric) {
            // reflect s across the non-alphanumeric characters
            whisper = whisper.replace(nonAlphanumeric, '');

            let flipped = whisper.split('').reverse().join('');
            whisper = whisper.concat(nonAlphanumeric, flipped, '...');

            return whisper;
        }

        let atFinal = false;
        while (!atFinal) {
            if (s.length !== 1) {
                // get second "half" of s, using Math.floor() and concat to whisper
                s = s.substring(Math.floor(s.length / 2)); 
                whisper = whisper.concat(' ', s);    
            }

            else if (s.length === 1) {
                // terminate the loop, then concat s one last time
                atFinal = true;
                whisper = whisper.concat(' ', s);
            }
        }

        //concat ellipses and return the whisper
        whisper = whisper.concat('...');
        return whisper;
    }
    return s;
}

export default windWhispers;