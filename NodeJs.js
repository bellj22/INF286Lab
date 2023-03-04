
	import { readFile } from 'fs';
	readFile('C:\Users\cutep\JavaNotepad', (err, data) => {
		if (err) throw err;
		console.log(data);
	});
}	