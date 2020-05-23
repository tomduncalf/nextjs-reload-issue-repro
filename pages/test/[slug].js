import Page from "../../components/Page";

export async function getStaticPaths() {
  const paths = ["/test/one", "/test/two"];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: {} };
}

export default function Home() {
  return <Page />;
}
