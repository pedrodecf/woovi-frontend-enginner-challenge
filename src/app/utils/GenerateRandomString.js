'use client'

const generateAndCopyRandomString = (setOpen, setMessage) => {
  const generateRandomString = (length) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const randomString = generateRandomString(10)
  navigator.clipboard
    .writeText(randomString)
    .then(() => {
      setMessage('O QR Code foi copiado!')
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    })
    .catch((err) => {
      console.error(err)
    })

  return randomString
}

export default generateAndCopyRandomString
