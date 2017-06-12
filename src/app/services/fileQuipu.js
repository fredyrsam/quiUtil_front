class fileQuipu {

    constructor(FileSaver){
        this.FileSaver = FileSaver;
        this.init();
    }

    init(){

    }

    base64ToArrayBuffer(base64) {
        var binary_string =  atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array( len );
        for (var i = 0; i < len; i++)        {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    downloadFromFileObj(file){
        /**
         * file = {
         *      filetype: 'application/pdf',
         *      filename: 'filename',
         *      base64: 'base64'
         *      filesize: filesize
         * }
         *
         */
        this.file = new Blob([this.base64ToArrayBuffer(file.base64)], { type: file.filetype});
        this.FileSaver.saveAs(this.file, file.filename);
    }

}

export default fileQuipu;
