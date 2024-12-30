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
      { label: "Quem Somos", link: "/quemsomos" },
      { label: "O que Fazemos", link: "/oquefazemos" },
      { label: "Gestão e Administração", link: "/gestaoeadministracao" },
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
    label: "Propriedades",
    link: "",
    submenu: [
      { label: "Características", link: "/caracteristicas" },
      { label: "Detalhes", link: "/detalhes" },
    ],
  },
];
