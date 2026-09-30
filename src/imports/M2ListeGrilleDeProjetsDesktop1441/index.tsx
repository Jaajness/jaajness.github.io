function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[21.031px] items-start pb-[10.516px] relative shrink-0 w-[205.488px]" data-name="Container">
      <p className="[word-break:break-word] font-['Cousine:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[#a40000] text-[6.572px] tracking-[1.9717px] whitespace-nowrap">01</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[27.604px] items-start pb-[6.572px] relative shrink-0 w-[205.488px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[21.031px] not-italic relative shrink-0 text-[#e9e9e9] text-[13.145px] whitespace-nowrap">Travail pratique dans Unity</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-[68.25_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[14.952px] not-italic relative shrink-0 text-[#878787] text-[8.544px] w-[205.714px]">Conception de systèmes de gameplay, intégration audio et animations 3D dans un jeu vidéo indépendant.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[6.572px] text-[rgba(135,135,135,0.7)] tracking-[1.3145px] uppercase whitespace-pre">{`Unity ·  C#`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Poppins:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[12.619px] relative shrink-0 text-[#a40000] text-[7.887px] text-center tracking-[0.9859px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Voir →
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="border-[rgba(164,0,0,0.12)] border-solid border-t-[0.657px] content-stretch flex items-center justify-between pt-[10.516px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Button />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[15.774px] relative shrink-0 w-full" data-name="Container:margin">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[172.483px] items-start min-h-[144.5915069580078px] p-[19.717px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Heading />
      <Paragraph />
      <ContainerMargin2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[21.031px] items-start pb-[10.516px] relative shrink-0 w-[205.488px]" data-name="Container">
      <p className="[word-break:break-word] font-['Cousine:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[#a40000] text-[6.572px] tracking-[1.9717px] whitespace-nowrap">02</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col h-[27.604px] items-start pb-[6.572px] relative shrink-0 w-[205.488px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[21.031px] not-italic relative shrink-0 text-[#e9e9e9] text-[13.145px] whitespace-nowrap">Prototype Jeu Unreal Engine</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-[68.25_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[14.952px] not-italic relative shrink-0 text-[#878787] text-[8.544px] w-[205.714px]">{`L'objectif de ce travail est de réaliser un prototype de jeu vidéo simple à l'aide d'Unreal Engine.`}</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[6.572px] text-[rgba(135,135,135,0.7)] tracking-[1.3145px] uppercase whitespace-nowrap">Unreal Engine · Blueprint</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Poppins:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[12.619px] relative shrink-0 text-[#a40000] text-[7.887px] text-center tracking-[0.9859px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Voir →
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="border-[rgba(164,0,0,0.12)] border-solid border-t-[0.657px] content-stretch flex items-center justify-between pt-[10.516px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button1 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[15.774px] relative shrink-0 w-full" data-name="Container:margin">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[172.483px] items-start min-h-[144.5915069580078px] p-[19.717px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Heading1 />
      <Paragraph1 />
      <ContainerMargin3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[21.031px] items-start pb-[10.516px] relative shrink-0 w-[205.488px]" data-name="Container">
      <p className="[word-break:break-word] font-['Cousine:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[#a40000] text-[6.572px] tracking-[1.9717px] whitespace-nowrap">03</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col h-[27.604px] items-start pb-[6.572px] relative shrink-0 w-[205.488px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[21.031px] not-italic relative shrink-0 text-[#e9e9e9] text-[13.145px] whitespace-nowrap">Prototype Unreal en Équipe</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-[68.25_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[14.952px] not-italic relative shrink-0 text-[#878787] text-[8.544px] w-[205.714px]">{`Description L'objectif de ce travail est de réaliser un prototype de jeu vidéo complexe à l'aide d'Unreal Engine, en Équipe.`}</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[6.572px] text-[rgba(135,135,135,0.7)] tracking-[1.3145px] uppercase whitespace-nowrap">Unreal Engine · Blueprint</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Poppins:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[12.619px] relative shrink-0 text-[#a40000] text-[7.887px] text-center tracking-[0.9859px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Voir →
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="border-[rgba(164,0,0,0.12)] border-solid border-t-[0.657px] content-stretch flex items-center justify-between pt-[10.516px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button2 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[15.774px] relative shrink-0 w-full" data-name="Container:margin">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[172.483px] items-start min-h-[144.5915069580078px] p-[19.717px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Heading2 />
      <Paragraph2 />
      <ContainerMargin4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[21.031px] items-start pb-[10.516px] relative shrink-0 w-[205.488px]" data-name="Container">
      <p className="[word-break:break-word] font-['Cousine:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[#a40000] text-[6.572px] tracking-[1.9717px] whitespace-nowrap">04</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col h-[27.604px] items-start pb-[6.572px] relative shrink-0 w-[205.488px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[21.031px] not-italic relative shrink-0 text-[#e9e9e9] text-[13.145px] whitespace-nowrap">Project X</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-[68.25_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[14.952px] not-italic relative shrink-0 text-[#878787] text-[8.544px] w-[205.714px]">Application web interactive à interface dynamique, intégrations API et expérience utilisateur poussée.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[6.572px] text-[rgba(135,135,135,0.7)] tracking-[1.3145px] uppercase whitespace-nowrap">Web · React · JS</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Poppins:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[12.619px] relative shrink-0 text-[#a40000] text-[7.887px] text-center tracking-[0.9859px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Voir →
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="border-[rgba(164,0,0,0.12)] border-solid border-t-[0.657px] content-stretch flex items-center justify-between pt-[10.516px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Button3 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[15.774px] relative shrink-0 w-full" data-name="Container:margin">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[172.483px] items-start min-h-[144.5915069580078px] p-[19.717px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Heading3 />
      <Paragraph3 />
      <ContainerMargin5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[21.031px] items-start pb-[10.516px] relative shrink-0 w-[205.488px]" data-name="Container">
      <p className="[word-break:break-word] font-['Cousine:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[#a40000] text-[6.572px] tracking-[1.9717px] whitespace-nowrap">05</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col h-[27.604px] items-start pb-[6.572px] relative shrink-0 w-[205.488px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[21.031px] not-italic relative shrink-0 text-[#e9e9e9] text-[13.145px] whitespace-nowrap">Route vers l’infini</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-[68.25_0_0] flex-col items-start min-h-px relative w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[14.952px] not-italic relative shrink-0 text-[#878787] text-[8.544px] w-[205.714px]">Séquence animée réalisée de A à Z dans Blender — modélisation, rigging, rendu final.</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[10.516px] not-italic relative shrink-0 text-[6.572px] text-[rgba(135,135,135,0.7)] tracking-[1.3145px] uppercase whitespace-nowrap">Blender · Animation 3D</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Poppins:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[12.619px] relative shrink-0 text-[#a40000] text-[7.887px] text-center tracking-[0.9859px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 700' }}>
        Voir →
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="border-[rgba(164,0,0,0.12)] border-solid border-t-[0.657px] content-stretch flex items-center justify-between pt-[10.516px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Button4 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[15.774px] relative shrink-0 w-full" data-name="Container:margin">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[172.483px] items-start min-h-[144.5915069580078px] p-[19.717px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Heading4 />
      <Paragraph4 />
      <ContainerMargin6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[9.201277732849121px] gap-y-[9.201277732849121px] grid grid-cols-[______118.52px_118.52px_118.52px_118.53px_118.52px_118.52px] grid-rows-[__173.80px_173.80px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#111] col-[1/span_2] justify-self-stretch relative rounded-[7.887px] row-1 self-stretch shrink-0" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container2 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.657px] border-[rgba(164,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[7.887px]" />
      </div>
      <div className="bg-[#111] col-[3/span_2] justify-self-stretch relative rounded-[7.887px] row-1 self-stretch shrink-0" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container5 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.657px] border-[rgba(164,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[7.887px]" />
      </div>
      <div className="bg-[#111] col-[5/span_2] justify-self-stretch relative rounded-[7.887px] row-1 self-stretch shrink-0" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container8 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.657px] border-[rgba(164,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[7.887px]" />
      </div>
      <div className="bg-[#111] col-[2/span_2] justify-self-stretch relative rounded-[7.887px] row-2 self-stretch shrink-0" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container11 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.657px] border-[rgba(164,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[7.887px]" />
      </div>
      <div className="bg-[#111] col-[4/span_2] justify-self-stretch relative rounded-[7.887px] row-2 self-stretch shrink-0" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container14 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[0.657px] border-[rgba(164,0,0,0.22)] border-solid inset-0 pointer-events-none rounded-[7.887px]" />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[42.063px] relative shrink-0 w-full" data-name="Container:margin">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[788.6809692382812px] px-[15.774px] relative shrink-0 w-[788.681px]" data-name="Container">
      <div className="[word-break:break-word] h-[31.547px] not-italic relative shrink-0 w-[757.134px] whitespace-nowrap" data-name="Container">
        <p className="absolute font-['Cousine:Bold',sans-serif] leading-[11.567px] left-0 text-[#a40000] text-[7.23px] top-[18.4px] tracking-[1.9717px]">02</p>
        <p className="absolute font-['Poppins:Black',sans-serif] leading-[31.547px] left-[25.05px] text-[#e9e9e9] text-[31.547px] top-0 tracking-[-0.9859px] uppercase">Projets</p>
      </div>
      <ContainerMargin1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container:margin">
      <Container />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[rgba(164,0,0,0.02)] border-[rgba(164,0,0,0.1)] border-b-[0.657px] border-solid border-t-[0.657px] content-stretch flex flex-col items-start left-[-1px] py-[63.094px] top-[-0.5px] w-[1440px]" data-name="Section">
      <ContainerMargin />
    </div>
  );
}

export default function M2ListeGrilleDeProjetsDesktop() {
  return (
    <div className="bg-[#0d0d0d] border border-[#d5dae5] border-solid relative size-full" data-name="M2 / Liste-grille de projets / Desktop 1441">
      <Section />
    </div>
  );
}