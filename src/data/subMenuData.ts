export interface MenuItem {
  id: string;
  label?: string;
  link?: string;
  submenu: { label: string; link: string }[];
};

export type Submenu = Pick<MenuItem, "submenu">;

export const subMenuData: MenuItem[] = [
  {
    id: "menu-1",
    label: "Institucional",
    link: "",
    submenu: [
      { label: "Quem Somos", link: "institucional/quemsomos" },
      { label: "O que Fazemos", link: "institucional/oquefazemos" },
      { label: "Gestão e Administração", link: "institucional/gestaoeadministracao" },
    ],
  },
  {
    id: "menu-2",
    label: "Transparência",
    link: "",
    submenu: [
      { label: "Prestação de Contas", link: "transparencia/prestacao-de-contas" },
      {
        label: "Documentos Institucionais",
        link: "transparencia/documentos-institucionais",
      },
    ],
  },
  {
    id: "menu-3",
    label: "Comunicação",
    link: "",
    submenu: [
      { label: "Serviços", link: "/comunicacao/servicos" },
      { label: "Programas", link: "/comunicacao/programas" },
      { label: "Galeria de fotos", link: "/comunicacao/galeriaDeFotos" },
    ],
  },
];
