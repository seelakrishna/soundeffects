import { Sound } from '../types/sound';

type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'email';

export function shareToSocialMedia(platform: SocialPlatform, sound: Sound) {
  const text = `Check out this ${sound.name} sound effect from the Sound Effects Library!`;
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(sound.name);
  const description = encodeURIComponent(sound.description);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    email: `mailto:?subject=${title}&body=${text}%0A%0A${description}%0A%0A${decodeURIComponent(url)}`,
  };

  const shareUrl = shareUrls[platform];
  
  if (platform === 'email') {
    window.location.href = shareUrl;
  } else {
    window.open(
      shareUrl,
      'share-dialog',
      'width=600,height=400,location=no,menubar=no,toolbar=no'
    );
  }
}

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert('Link copied to clipboard!');
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    alert('Failed to copy link to clipboard');
  }
}