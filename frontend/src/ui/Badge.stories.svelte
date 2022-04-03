<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Badge from "../ui/Badge.svelte";
  import mainImage from "../../public/assets/kastje_1.jpeg"
</script>

<Meta
    title="Badge"
    component={Badge}
    argTypes={{
        item: {},
        badgeClick: { action: "badgeClick"}
    }}
/>

<Template let:args>
  <Badge {...args} on:badgeClick={args.badgeClick} />
</Template>

<Story
    name="Badge Project"
    args={{
       item: {
            id: "kastje",
            title: "Het kastje",
            tags: ["kastje", "tweede leerjaar", "werkstuk"],
            badgeImage: {
                src: mainImage,
                alt: "kastje",
            },
            text: "In de laatste periode van het eerste leerjaar heb ik een kastje bedacht en uitgewerkt die ik in het tweede leerjaar gemaakt heb. Ik heb multiplex met een mahonie fineer laag gebruikt en voor de lade en herlijst heb ik notenhout gebruikt. Voor de afwerking heb ik een witte lak gebruikt zodat de kleur van het noten hout er mooier uit komt.",
            selected: true,
            additionalImages: [
                // {
                //     src: "assets/la_in_lijmklemmen.jpeg",
                //     alt: "la in lijmklemmen"
                // },
                // {
                //     src: "assets/la_zijde.jpeg",
                //     alt: "zijkant lade"
                // },
                // {
                //     src: "assets/la_zijdes.jpeg",
                //     alt: "zijkanten lade"
                // }
            ]
        }
    }}
/>