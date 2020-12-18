import { Layout, Hero, Paragraph, Container, Panel } from "@/components";

export default function Page() {
  return (
    <Layout>
      <Hero>
        <Paragraph
          title="Haqqımızda"
          icon={<i className="far fa-joystick text-six"></i>}
        />
      </Hero>
      <section className="blank-page">
        <Container>
          <Panel.Wrapper>
            <Panel.Body className="pb-2">
              <h1>Hologame</h1>
              <p>
                Hologame 2020 ci ildə fəaliyyətə başlamışdır. Bizim işləmə
                məqsədimiz, online oyunlara balans artırılmasını istifadəçilər üçün
                asanlaşırdırmaqdır. Daxilimizdə bir çox məhsul vardır. Pubg
                Mobile, Mobile Legends, pubg mobile lite, sabotaj, zula, point
                blank və digər bir çox oyun sistemdə mövcuddur.
              </p>
            </Panel.Body>
          </Panel.Wrapper>
        </Container>
      </section>
    </Layout>
  );
}
