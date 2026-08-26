const BeautyShelfUnpublishedPage = () => null

export function getStaticProps() {
  return {
    redirect: {
      destination: '/projects',
      permanent: false
    }
  }
}

export default BeautyShelfUnpublishedPage
