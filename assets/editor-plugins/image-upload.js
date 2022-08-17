const API_URL = 'http://localhost:8080'
const UPLOAD_ENDPOINT = 'upload_files'

class MyUploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      const body = new FormData()
      this.loader.file.then((file) => {
        body.append('files', file)
        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
          method: 'post',
          body,
        })
          .then((res) => res.json())
          .then((res) => {
            resolve({
              default: `${API_URL}/${res.filename}`,
            })
          })
          .catch((err) => {
            reject(err)
          })
      })
    })
  }
}

export default function uploadPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader)
  }
}
