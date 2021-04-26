export async function getRandomImage(): Promise<string> {
  const newImage = await fetch('https://source.unsplash.com/random');

  return newImage.url;
}
