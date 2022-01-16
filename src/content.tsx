import { Images } from './assets'

export const INFORMATION_BAR_CONTENT = {
  p: "To celebrate Spense's launch, we will be waiving all fees for the entire month of April. You will be receiving 100% of the earnings.",
}

export const MAIN_CONTENT = {
  h1: 'Share your unfiltered thoughts. Get paid.',
  p: 'Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing just that.',
  reasons: [
    {
      img: Images.Checkmark,
      p: 'Receive 99% off the earnings.'
    },
    {
      img: Images.Checkmark,
      p: 'Get paid via Debit Card ACH, or PayPal.'
    },
    {
      img: Images.Checkmark,
      p: 'Withdraw your earnings anytime.'
    }
  ],
  button_text: 'Get Started',
  main_img: {
    mobile: Images.HeroImageMobile,
    tablet: Images.HeroImageTablet,
    desktop: Images.HeroImageDesktop
  }
}