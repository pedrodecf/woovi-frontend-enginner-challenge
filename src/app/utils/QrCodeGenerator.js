'use client'
import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

const QRCodeGenerator = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const generateRandomString = (length) => {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        )
      }
      return result
    }

    const randomString = generateRandomString(10)

    const resizeQRCode = () => {
      const containerWidth = containerRef.current.offsetWidth
      QRCode.toCanvas(
        canvasRef.current,
        randomString,
        {
          width: containerWidth,
          margin: 2,
        },
        (error) => {
          if (error) console.error(error)
          console.log('QR code generated with random string:', randomString)
        },
      )
    }

    resizeQRCode()

    window.addEventListener('resize', resizeQRCode)

    return () => window.removeEventListener('resize', resizeQRCode)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '95%', maxWidth: 'auto', height: 'auto' }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default QRCodeGenerator
