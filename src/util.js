// Media resize

export const smallImage = (imagePath, size) => {
  const image =
    imagePath && imagePath.match(/media\/screenshots/)
      ? imagePath
        ? imagePath.replace(
            'media/screenshots',
            `media/resize/${size}/-/screenshots`
          )
        : (imagePath =
            'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image.jpg')
      : imagePath
      ? imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`)
      : (imagePath =
          'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image.jpg')
  return image
}
