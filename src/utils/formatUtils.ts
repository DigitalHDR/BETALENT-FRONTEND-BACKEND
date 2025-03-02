// import React from 'react'

const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove todos os caracteres não numéricos
  phoneNumber = phoneNumber.replace(/\D/g, '')

  // Formatação para o padrão +55 (XX) XXXXX-XXXX
  let formattedNumber = '+'

  if (phoneNumber.length === 13) {
    // Para números com DDI + DDD + número de celular
    formattedNumber +=
      phoneNumber.slice(0, 2) +
      ' (' +
      phoneNumber.slice(2, 4) +
      ') ' +
      phoneNumber.slice(4, 9) +
      '-' +
      phoneNumber.slice(9)
  } else if (phoneNumber.length === 12) {
    // Para números com DDI + DDD + número fixo
    formattedNumber +=
      phoneNumber.slice(0, 2) +
      ' (' +
      phoneNumber.slice(2, 4) +
      ') ' +
      phoneNumber.slice(4, 8) +
      '-' +
      phoneNumber.slice(8)
  } else {
    formattedNumber += phoneNumber // Deixa como está se o comprimento não for compatível
  }

  return formattedNumber
}

export default formatPhoneNumber
