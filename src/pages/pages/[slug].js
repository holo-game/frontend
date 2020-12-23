import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { usePage } from "@/graphql/actions/page.action";
import {
  Layout,
  Hero,
  Paragraph,
  Container,
  Panel,
  Loader,
} from "@/components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: { pageBySlug } = {}, loading, error } = usePage({
    variables: { slug },
  });
  return (
    <Layout>
      <Hero>
        {!loading ? (
          <Paragraph title={pageBySlug?.title} />
        ) : (
          <SkeletonTheme color="#272b3a" highlightColor="#383e52">
            <Skeleton width="200px" height="36px" />
          </SkeletonTheme>
        )}
      </Hero>
      <section className="blank-page">
        <Container>
          {!loading ? (
            <Panel.Wrapper>
              <Panel.Body className="pb-2">
                <ReactMarkdown>{pageBySlug?.content}</ReactMarkdown>
              </Panel.Body>
            </Panel.Wrapper>
          ) : (
            <SkeletonTheme color="#272b3a" highlightColor="#383e52">
              <Skeleton count={9} height={20} style={{ lineHeight: 3 }} />
            </SkeletonTheme>
          )}
        </Container>
      </section>
    </Layout>
  );
}
