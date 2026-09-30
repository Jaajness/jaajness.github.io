type FormulaireValidationProps = {
  className?: string;
  enonce?: string;
  etat?: "À faire" | "Validé";
};

function FormulaireValidation({ className, enonce = "Élément à vérifier", etat = "À faire" }: FormulaireValidationProps) {
  const isAFaire = etat === "À faire";
  const isValide = etat === "Validé";
  return (
    <div className={className || "bg-[#e9faf6] h-[52px] relative rounded-[10px] w-[560px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
          <div className={`relative rounded-[6px] shrink-0 size-[22px] ${isValide ? "bg-[#059688] content-stretch flex items-center justify-center overflow-clip" : ""}`} data-name="État / Case">
            {isAFaire && (
              <>
                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full" />
                <div aria-hidden className="absolute border border-[#059688] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </>
            )}
            {isValide && (
              <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                ✓
              </p>
            )}
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] min-w-px relative text-[#121b2f] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {enonce}
          </p>
        </div>
      </div>
    </div>
  );
}
type FormulaireRepereDactionProps = {
  className?: string;
  type?: "Remplir" | "Déposer" | "Cocher";
};

function FormulaireRepereDaction({ className, type = "Remplir" }: FormulaireRepereDactionProps) {
  const isCocher = type === "Cocher";
  const isDeposer = type === "Déposer";
  return (
    <div className={className || `h-[64px] relative rounded-[12px] w-[1280px] ${isCocher ? "bg-[#e9faf6]" : isDeposer ? "bg-[#f5f2ff]" : "bg-[#edf3ff]"}`}>
      <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[16px] py-[12px] relative size-full">
          <div className={`content-stretch flex items-start overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0 ${isCocher ? "bg-[#059688]" : isDeposer ? "bg-[#6e3ded]" : "bg-[#1e66f5]"}`} data-name="Action">
            <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {isCocher ? "✓ À COCHER" : isDeposer ? "↓ À DÉPOSER" : "✎"}
            </p>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#121b2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {isCocher ? "Coche ou valide l’élément sans supprimer son énoncé." : isDeposer ? "Ajoute le lien, l’image ou le fichier dans la zone indiquée. Conserve les consignes." : "Écris dans les zones bleues précédées du crayon. Conserve les consignes."}
          </p>
        </div>
      </div>
    </div>
  );
}
type FormulaireEncadreDinformationProps = {
  className?: string;
  teinte?: "Bleu" | "Vert" | "Jaune";
  texte?: string;
  titre?: string;
};

function FormulaireEncadreDinformation({ className, teinte = "Bleu", texte = "Une information courte, utile et directement liée à l’action attendue.", titre = "POINT D’ATTENTION" }: FormulaireEncadreDinformationProps) {
  const isBleu = teinte === "Bleu";
  const isJaune = teinte === "Jaune";
  const isVert = teinte === "Vert";
  return (
    <div className={className || `h-[80px] relative rounded-[14px] w-[1216px] ${isJaune ? "bg-[#fff8e3]" : isVert ? "bg-[#ecf9f1]" : "bg-[#edf3ff]"}`}>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[22px] py-[20px] relative size-full">
        {isBleu && (
          <>
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e66f5] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {titre}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#121b2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {texte}
            </p>
          </>
        )}
        {isVert && (
          <>
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#059688] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {titre}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#121b2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {texte}
            </p>
          </>
        )}
        {isJaune && (
          <>
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ec6d1b] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {titre}
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#121b2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {texte}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
type FormulaireEnTeteDeSectionProps = {
  className?: string;
  accent?: "Bleu" | "Violet";
  afficherLintroduction?: boolean;
  introduction?: string;
  repere?: string;
  titre?: string;
};

function FormulaireEnTeteDeSection({ className, accent = "Bleu", afficherLintroduction = true, introduction = "Une courte phrase situe l’objectif de cette partie.", repere = "MODULE 1 — REPÈRE", titre = "Titre de la section" }: FormulaireEnTeteDeSectionProps) {
  const isBleu = accent === "Bleu";
  const isViolet = accent === "Violet";
  return (
    <div className={className || "relative w-[1216px]"}>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative size-full">
        {isBleu && (
          <>
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e66f5] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {repere}
            </p>
            <p className="font-['Roboto:Black',sans-serif] font-black leading-[44px] relative shrink-0 text-[#121b2f] text-[38px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {titre}
            </p>
          </>
        )}
        {isBleu && afficherLintroduction && (
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#5d6678] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            {introduction}
          </p>
        )}
        {isViolet && (
          <>
            <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#6e3ded] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {repere}
            </p>
            <p className="font-['Roboto:Black',sans-serif] font-black leading-[44px] relative shrink-0 text-[#121b2f] text-[38px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              {titre}
            </p>
          </>
        )}
        {isViolet && afficherLintroduction && (
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#5d6678] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            {introduction}
          </p>
        )}
      </div>
    </div>
  );
}

function EnTetePresentation() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="En-tête / Présentation">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#7dd3fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        PORTFOLIO · MODULE 2
      </p>
      <p className="font-['Roboto:Black',sans-serif] font-black leading-[62px] relative shrink-0 text-[54px] text-white w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Scénariser les contenus du coffre
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#dae3f3] text-[20px] w-[1060px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Consolider le contenu maître, scénariser trois projets, structurer quatre pages desktop et planifier la vidéo de présentation avant la conception visuelle.
      </p>
    </div>
  );
}

function RepereIndividuel() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-name="Repère / INDIVIDUEL">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        INDIVIDUEL
      </p>
    </div>
  );
}

function RepereSemaine() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-name="Repère / SEMAINE 1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        SEMAINE 2
      </p>
    </div>
  );
}

function RepereRemiseAvantS2P() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-name="Repère / REMISE · AVANT S2-P1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        REMISE · AVANT S3-P1
      </p>
    </div>
  );
}

function ReperePonderation() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-name="Repère / PONDÉRATION · 20 %">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        PONDÉRATION · 10 %
      </p>
    </div>
  );
}

function ReperesDuModule() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_12px] items-start overflow-clip relative shrink-0 w-full" data-name="Repères du module">
      <RepereIndividuel />
      <RepereSemaine />
      <RepereRemiseAvantS2P />
      <ReperePonderation />
    </div>
  );
}

function ModeDemploi() {
  return (
    <div className="bg-[rgba(125,211,252,0.12)] relative rounded-[16px] shrink-0 w-full" data-name="Mode d’emploi">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Comment utiliser cette page
          </p>
          <p className="font-['Roboto:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#e6ecf7] text-[16px] w-[1110px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`1. Conserve les consignes et les libellés.   2. Écris seulement dans les zones bleues précédées du crayon ✎.   3. Travaille dans les quatre gabarits desktop de la section adjacente.   4. Coche les éléments « ✓ À COCHER » sans supprimer leur texte.`}</p>
        </div>
      </div>
    </div>
  );
}

function ChampNomDeLetudiant() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[20px] py-[18px] relative rounded-[14px] shrink-0 w-[760px]" data-name="Champ / NOM DE L’ÉTUDIANT">
      <p className="leading-[17px] relative shrink-0 text-[#5d6678] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        NOM DE L’ÉTUDIANT
      </p>
      <p className="leading-[25px] relative shrink-0 text-[#174ea6] text-[18px] w-[720px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Éli Bousquet
      </p>
    </div>
  );
}

function ChampGroupe() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[20px] py-[18px] relative rounded-[14px] shrink-0 w-[408px]" data-name="Champ / GROUPE">
      <p className="leading-[17px] relative shrink-0 text-[#5d6678] text-[12px] w-[47px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        GROUPE
      </p>
      <p className="leading-[25px] relative shrink-0 text-[#174ea6] text-[18px] w-[368px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        1011
      </p>
    </div>
  );
}

function Identification() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Bold',sans-serif] font-bold gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Identification">
      <ChampNomDeLetudiant />
      <ChampGroupe />
    </div>
  );
}

function Component01EnTeteEtModeDemploi() {
  return (
    <div className="bg-[#121b2f] relative rounded-[24px] shrink-0 w-full" data-name="01 — En-tête et mode d’emploi">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[64px] relative size-full">
          <EnTetePresentation />
          <ReperesDuModule />
          <div className="bg-[rgba(255,255,255,0.18)] h-px relative shrink-0 w-[1184px]" data-name="Séparateur" />
          <ModeDemploi />
          <Identification />
        </div>
      </div>
    </div>
  );
}

function PageAProposColonneGauche() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Page À propos / Colonne gauche">
      <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Page À propos / Accroche">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            TITRE D’OUVERTURE OU ACCROCHE
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            10 à 20 mots. Résume ton profil et donne envie de poursuivre la lecture.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Un portfolio énergisant et vivant, à l’image d’une personne avec tout autant d’énergie
          </p>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Champ / Compétences distinctives">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            COMPÉTENCES TECHNIQUES (HARD SKILLS)
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Nomme 5 à 8 compétences utiles à ta cible. `}</p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Animation 3D
            <br aria-hidden />
            Programmation dans plusieurs langages
            <br aria-hidden />
            Aisance et expérience en création de jeux vidéo
            <br aria-hidden />
            Montage vidéo et photo
            <br aria-hidden />
            Développement Web
          </p>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Champ / Compétences distinctives">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            LOGICIELS MAÎTRISÉS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Nomme 5 à 8 logiciels que tu maîtrise suffisament pour être utiles à ta cible. `}</p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            {`Unity                                   Adobe Photoshop`}
            <br aria-hidden />
            {`Unreal Engine                   Adobe Illustrator`}
            <br aria-hidden />
            {`Blender                              Adobe Premiere Pro     `}
            <br aria-hidden />
            Reaper
            <br aria-hidden />
            Figma
          </p>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Champ / Compétences distinctives">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            LANGAGE MAÎTRISÉS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Nomme 3 à 5 langages que tu maîtrise suffisament pour être utiles à ta cible. `}</p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            C#
            <br aria-hidden />
            JS
            <br aria-hidden />
            Blueprint
            <br aria-hidden />
            Python
            <br aria-hidden />
            HTML/CSS
          </p>
        </div>
      </div>
    </div>
  );
}

function PageAProposColonneDroite() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Page À propos / Colonne droite">
      <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Champ / Proposition de valeur">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            PROPOSITION DE VALEUR
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reprends la proposition validée dans M1. Ajuste-la seulement si elle doit gagner en clarté.
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ma présence apporte dans les projets une grande force en programmation et en animation. Je contribue grandement dans les équipes de jeux-vidéo, de web et d’animation, grâce à mes compétences en codage, mon sens de la résolution de problèmes et ma créativité.
          </p>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[229px] relative rounded-[14px] shrink-0 w-full" data-name="Champ / Personnalité et intérêts">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            QUALITÉS HUMAINES PROFESSIONNELLES (SOFT SKILLS)
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Choisis 5 repères qui révèlent ta façon de travailler.
          </p>
          <p className="font-['Roboto:Bold',sans-serif] font-bold h-[112px] leading-[0] relative shrink-0 text-[#174ea6] text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <span className="font-['Roboto:Black',sans-serif] font-black leading-[23px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Bonne communication
            </span>
            <span className="leading-[23px]">
              {` - Toujours à l’écoute, participe aux converstations`}
              <br aria-hidden />
            </span>
            <span className="font-['Roboto:Black',sans-serif] font-black leading-[23px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Patience
            </span>
            <span className="leading-[23px]">
              {` - N’abandonne pas, va chercher à trouver des solutions `}
              <br aria-hidden />
            </span>
            <span className="font-['Roboto:Black',sans-serif] font-black leading-[23px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Altruisme
            </span>
            <span className="leading-[23px]">
              {` - Va être porté à aider et régler des problèmes pour les autres`}
              <br aria-hidden />
            </span>
            <span className="font-['Roboto:Black',sans-serif] font-black leading-[23px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Imagination poussée
            </span>
            <span className="leading-[23px]">
              {` - Aisance à trouver de l’inspiration et penser à des choses originales`}
              <br aria-hidden />
            </span>
            <span className="font-['Roboto:Black',sans-serif] font-black leading-[23px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Soucis du détail
            </span>
            <span className="leading-[23px]">
              {` - Prends le temps de bien faire les choses dans les moindres détails`}
              <br aria-hidden />
              <br aria-hidden />
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Page À propos / Intérêts et loisirs">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            INTÉRÊTS ET LOISIRS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            3 à 5 éléments. Choisis ceux qui révèlent ta personnalité ou créent un lien humain.
          </p>
          <div className="font-['Roboto:Bold',sans-serif] font-bold h-[112px] leading-[0] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">01 · Jeux-vidéos</p>
            <p className="leading-[24px] mb-0">02 · Mangas/Anime</p>
            <p className="leading-[24px]">03 · Arts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageAProposDeuxColonnes() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Page À propos / Deux colonnes">
      <PageAProposColonneGauche />
      <PageAProposColonneDroite />
    </div>
  );
}

function Component02ContenuMaitreSurLaPersonne() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="02 — Contenu maître sur la personne">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Banque / Introduction">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative size-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e66f5] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                M2 — CONTENU MAÎTRE
              </p>
              <p className="font-['Roboto:Black',sans-serif] font-black leading-[44px] relative shrink-0 text-[#121b2f] text-[38px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                1. Finaliser les contenus de la page À propos
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#5d6678] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Reprends les décisions du M1, puis transforme-les en contenus prêts à utiliser dans ta page À propos. Évite les répétitions : la banque nourrit les textes finaux.
              </p>
            </div>
          </div>
          <FormulaireRepereDaction className="bg-[#edf3ff] h-[64px] relative rounded-[12px] shrink-0 w-full" />
          <PageAProposDeuxColonnes />
        </div>
      </div>
    </div>
  );
}

function Projet1Textes() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px overflow-clip relative" data-name="Projet 1 / Textes">
      <div className="bg-[#edf3ff] relative rounded-[14px] self-stretch shrink-0 w-[574px]" data-name="Projet 1 / Résumé">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            ANGLE ET MISE EN CONTEXTE
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            30 à 50 mots. Situe le besoin, le public et l’intention du projet.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Concevoir un jeu 3D éducatif avec une thématique écologique (sauvegarde de l’environnement, recyclage, le compost, espèces menacées). Le joueur doit se déplacer en utilisant les touches du clavier pour collecter des objets et éviter des obstacles. Le but du jeu est de sensibiliser les joueurs aux enjeux environnementaux tout en les divertissant.
          </p>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] self-stretch shrink-0 w-[574px]" data-name="Projet 1 / Rôle et crédits">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            RÔLE ET CRÉDITS ESSENTIELS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            1 à 3 lignes. Précise ta contribution et les principales collaborations.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Travail seul, l’environnement de jeu, les animations, les effets, la programmation, les interactions sont faites par une seule personne (moi)
          </p>
        </div>
      </div>
    </div>
  );
}

function Projet1Resume() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Projet 1 / Résumé">
      <Projet1Textes />
    </div>
  );
}

function NumeroConteneur() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ff8989] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function NumeroConteneur1() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function NumeroConteneur2() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function NumeroConteneur3() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
    </div>
  );
}

function NumeroConteneur4() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
    </div>
  );
}

function Projet1CinqEtapes() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Projet 1 / Cinq étapes">
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 1">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 1 — Environnement 3D | Création de deux scènes dédiées au jeu 3D. Le jeu se déroule en deux niveaux distincts : le premier se passe à l'intérieur, le second à l'extérieur. | photo`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 2">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur1 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              ✎ Étape 2 — Interface 2D | Design d’une interface 2D de type HUD (“Heads-Up Display”), c’est-à-dire une interface qui affiche dans l’espace-écran des informations. | Photo
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur2 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              ✎ Étape 3 — Gestion du son et de la musique | La musique doit jouer en boucle à partir de la scène d’accueil jusqu’à la conclusion du jeu. Il doit y avoir trois sons 2D et trois sons 3D. | Vidéo
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur3 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              ✎ Étape 4 — Système de collecte d’objets | Programmation un système permettant de récupérer des objets dans l’environnement 3D. Ces objets doivent représenter des éléments en lien avec la thématique choisie. Le joueur devra disposer/déplacer/installer correctement de ces éléments pour gagner des points. | photo(s)
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur4 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              ✎ Étape 5 — Scène finale | La dernière scène est une interface 2D qui doit contenir au minimum 5 éléments: Le titre de votre , une image d’arrière-plan, votre nom, le pointage et le nom du joueur, un bouton pour recommencer le jeu. | photo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projet1Textes1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px overflow-clip relative" data-name="Projet 1 / Textes">
      <div className="bg-[#edf3ff] relative rounded-[14px] self-stretch shrink-0 w-[574px]" data-name="Projet 1 / Résumé">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            ANGLE ET MISE EN CONTEXTE
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            30 à 50 mots. Situe le besoin, le public et l’intention du projet.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`L'objectif de ce travail est de réaliser un prototype de jeu vidéo simple à l'aide d'Unreal Engine. Ce projet permettra de mettre en pratique les notions de base acquises, notamment la gestion des niveaux (Levels), la création d'interfaces utilisateur (Widgets), l'implémentation de mécanismes de jeu via les Blueprints, et l'utilisation de systèmes d'entrée modernes.`}</p>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] self-stretch shrink-0 w-[574px]" data-name="Projet 1 / Rôle et crédits">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            RÔLE ET CRÉDITS ESSENTIELS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            1 à 3 lignes. Précise ta contribution et les principales collaborations.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Travail seul, l’environnement de jeu, les animations, les effets, la programmation, les interactions sont faites par une seule personne (moi)
          </p>
        </div>
      </div>
    </div>
  );
}

function Projet1Resume1() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Projet 1 / Résumé">
      <Projet1Textes1 />
    </div>
  );
}

function NumeroConteneur5() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function NumeroConteneur6() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function NumeroConteneur7() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function NumeroConteneur8() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
    </div>
  );
}

function NumeroConteneur9() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
    </div>
  );
}

function Projet1CinqEtapes1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Projet 1 / Cinq étapes">
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 1">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur5 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 1 — Écran de démarrage | Ce niveau sert d'interface d'accueil. Il doit être implémenté via un Widget et doit contenir le nom et prénom, le titre du jeu, l’image d’arrière-plan et le bouton “Jouer” et “Quitter”. | photo`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 2">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur6 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 2 — Niveau : Le jeu | Ce niveau est le cœur du prototype. C'est ici que le joueur doit accomplir les objectifs. | photo`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur7 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 3 — Mécanisme de déverrouillage | Un mécanisme dans cette pièce que le joueur doit activer pour déverrouiller la porte. L'interaction doit utiliser les Blueprint Interface. Mécanisme de Déverrouillage Complexe : Pour déverrouiller la porte, le joueur doit interagir avec trois objets distincts dans la pièce, sans un ordre spécifique. | gallerie de photos`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur8 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 4 — Pièce 2 : L'Objectif Final | Mécanisme de Victoire : Un mécanisme que le joueur doit arrêter ou désactiver pour gagner la partie. L'interaction doit utiliser les Blueprint Interface. | vidéo/gif`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur9 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 5 — Écran de fin | Ce niveau sert d'interface après la victoire. Il doit être implémenté via un Widget et doit contenir les éléments de l’écren de départ, mais avec “Rejouer” à la place de “Jouer”  | photo`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projet1Textes2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[20px] items-start min-w-px overflow-clip relative" data-name="Projet 1 / Textes">
      <div className="bg-[#edf3ff] relative rounded-[14px] self-stretch shrink-0 w-[574px]" data-name="Projet 1 / Résumé">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            ANGLE ET MISE EN CONTEXTE
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            30 à 50 mots. Situe le besoin, le public et l’intention du projet.
          </p>
          <div className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[0] relative shrink-0 text-[#174ea6] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[24px] mb-0">{`L'objectif de ce travail est de réaliser un prototype de jeu vidéo simple à l'aide d'Unreal Engine, en Équipe. Ce projet permettra de mettre en pratique les notions de base acquises, notamment la gestion des niveaux (Levels), la création d'interfaces utilisateur (Widgets), l'implémentation de mécanismes de jeu via les Blueprints, et l'utilisation de systèmes d'entrée modernes.`}</p>
            <p className="leading-[24px]">​</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] relative rounded-[14px] self-stretch shrink-0 w-[574px]" data-name="Projet 1 / Rôle et crédits">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            RÔLE ET CRÉDITS ESSENTIELS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            1 à 3 lignes. Précise ta contribution et les principales collaborations.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium h-[112px] leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Il y a 5 niveaux dans le jeu, en ordre de difficultés. J’étais responsable du niveau 5. J’ai également aidé dans les problèmes concernant les scripts.
          </p>
        </div>
      </div>
    </div>
  );
}

function Projet1Resume2() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Projet 1 / Résumé">
      <Projet1Textes2 />
    </div>
  );
}

function NumeroConteneur10() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function NumeroConteneur11() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function NumeroConteneur12() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function NumeroConteneur13() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
    </div>
  );
}

function NumeroConteneur14() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
    </div>
  );
}

function Projet1CinqEtapes2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Projet 1 / Cinq étapes">
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 1">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur10 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 1 — Écran de démarrage | Ce niveau sert d'interface d'accueil. Il doit être implémenté via un Widget et doit contenir le nom et prénom, le titre du jeu, l’image d’arrière-plan et le bouton “Jouer” et “Quitter”. | photo`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 2">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur11 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 2 — Niveaux : Le jeu | Ce niveau est le cœur du prototype. C'est ici que le joueur doit accomplir les objectifs. Chaque étudiant doit faire son propre Level. La mécanique du jeu peut être partagée par les coéquipiers de l’équipe (Système de point de vie, personnage, système d’interaction) | gallerie de photos`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur12 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 3 — Système d’interaction | Vous devez avoir un système d'interaction pour interagir avec au moins un objet dans chaque salle. C’est-à-dire que vous devez être prèt d’un Actor et cliquer sur une touche (ex: la touche E) pour déclencher un événement | Gallerie image`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur13 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 4 — Système de points de vie | Vous devez mettre un système de points de vie  pour le personnage. Le personnage doit perdre des points, il peut gagner des points de vie et il peut mourir. Les points de vie doivent suivre d’un Level à une autre. | gif ou vidéo`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#edf3ff] h-[60px] relative rounded-[12px] shrink-0 w-full" data-name="Projet 1 / Étape 5">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14px] items-center p-[14px] relative size-full">
            <NumeroConteneur14 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`✎ Étape 5 — Écran de fin | Ce niveau sert d'interface après la victoire. Il doit être implémenté via un Widget et doit contenir les mêmes éléments que l’écran de début, avec les statistiques de la partie et le bouton rejouer. | photo`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjetNumero() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Projet / Numéro">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        04
      </p>
    </div>
  );
}

function ProjetIdentification() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-bold gap-[5px] items-start overflow-clip relative shrink-0 text-[#174ea6]" data-name="Projet / Identification">
      <p className="font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-[850px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Project X
      </p>
      <p className="font-['Roboto:Bold',sans-serif] leading-[19px] opacity-28 relative shrink-0 text-[13px] w-[850px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ⏳ DOCUMENTATION COMPLÈTE À RÉALISER POUR LA BÊTA
      </p>
    </div>
  );
}

function ProjetEnTete() {
  return (
    <div className="content-stretch flex gap-[18px] items-center overflow-clip relative shrink-0 w-full" data-name="Projet / En-tête">
      <ProjetNumero />
      <ProjetIdentification />
    </div>
  );
}

function ProjetNumero1() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[56px]" data-name="Projet / Numéro">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        05
      </p>
    </div>
  );
}

function ProjetIdentification1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-bold gap-[5px] items-start overflow-clip relative shrink-0 text-[#174ea6]" data-name="Projet / Identification">
      <p className="font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-[850px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Route vers l’infini
      </p>
      <p className="font-['Roboto:Bold',sans-serif] leading-[19px] opacity-28 relative shrink-0 text-[13px] w-[850px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ⏳ DOCUMENTATION COMPLÈTE À RÉALISER POUR LA BÊTA
      </p>
    </div>
  );
}

function ProjetEnTete1() {
  return (
    <div className="content-stretch flex gap-[18px] items-center overflow-clip relative shrink-0 w-full" data-name="Projet / En-tête">
      <ProjetNumero1 />
      <ProjetIdentification1 />
    </div>
  );
}

function Component03RecitDesTroisProjetsRetenus() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="03 — Récit des trois projets retenus">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
          <FormulaireEnTeteDeSection className="relative shrink-0 w-full" introduction="Reprends les trois projets validés dans M1. Ne recommence pas leur analyse : organise maintenant leur récit et les preuves à montrer." repere="M2 — RÉCITS DE PROJETS" titre="2. Développer le récit des trois projets retenus" />
          <FormulaireRepereDaction className="bg-[#edf3ff] h-[64px] relative rounded-[12px] shrink-0 w-full" />
          <div className="bg-[#fff8e3] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Info / Cinq étapes">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[22px] py-[20px] relative size-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ec6d1b] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                STRUCTURE MINIMALE
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#121b2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Chaque projet comporte au moins cinq étapes. Pour chaque étape : un titre, une phrase de 10 à 25 mots et le média prévu. Ensemble, les étapes doivent rendre visibles le défi, la solution et le résultat. Nomme seulement les projets 4 et 5 au bas; leur documentation complète sera réalisée pour la Bêta.
              </p>
            </div>
          </div>
          <div className="bg-[#f6f8fc] relative rounded-[16px] shrink-0 w-full" data-name="Projet 1 / Scénario complet">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Projet 1 / Titre validé M1">
                  <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      PROJET 1 — TITRE INFORMATIF ET ACCROCHEUR
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Améliore ton titre afin qu’il soit informatif et accrocheur. Ex. : Intégration HTML, CSS et JS d’un site web promotionnel; modélisation et animation 3D d’une souris mécanique.
                    </p>
                    <p className="font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#174ea6] text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Travail pratique d’un jeux-vidéo dans Unity
                    </p>
                  </div>
                </div>
                <Projet1Resume />
                <Projet1CinqEtapes />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <div className="bg-[#f6f8fc] relative rounded-[16px] shrink-0 w-full" data-name="Projet 2 / Scénario complet">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Projet 1 / Titre validé M1">
                  <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      PROJET 2 — TITRE INFORMATIF ET ACCROCHEUR
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Améliore ton titre afin qu’il soit informatif et accrocheur. Ex. : Intégration HTML, CSS et JS d’un site web promotionnel; modélisation et animation 3D d’une souris mécanique.
                    </p>
                    <p className="font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#174ea6] text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Prototype de Jeu Vidéo sur Unreal Engine
                    </p>
                  </div>
                </div>
                <Projet1Resume1 />
                <Projet1CinqEtapes1 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <div className="bg-[#f6f8fc] relative rounded-[16px] shrink-0 w-full" data-name="Projet 3 / Scénario complet">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                <div className="bg-[#edf3ff] relative rounded-[14px] shrink-0 w-full" data-name="Projet 1 / Titre validé M1">
                  <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      PROJET 3 — TITRE INFORMATIF ET ACCROCHEUR
                    </p>
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Améliore ton titre afin qu’il soit informatif et accrocheur. Ex. : Intégration HTML, CSS et JS d’un site web promotionnel; modélisation et animation 3D d’une souris mécanique.
                    </p>
                    <p className="font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#174ea6] text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Prototype de Jeu Vidéo sur Unreal Engine en Équipe
                    </p>
                  </div>
                </div>
                <Projet1Resume2 />
                <Projet1CinqEtapes2 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Projet 4 / À compléter pour la Bêta">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[28px] relative size-full">
                <ProjetEnTete />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
          <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Projet 5 / À compléter pour la Bêta">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[28px] relative size-full">
                <ProjetEnTete1 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-start overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-name="Action">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        À FAIRE DANS LA SECTION ADJACENTE
      </p>
    </div>
  );
}

function Component04WireframesDeStructure() {
  return (
    <div className="bg-white h-[302px] relative rounded-[24px] shrink-0 w-full" data-name="04 — Wireframes de structure">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
          <div className="relative shrink-0 w-[1216px]" data-name="Vidéo / Introduction">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative size-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#6e3ded] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                M2 — STRUCTURE DES PAGES
              </p>
              <p className="font-['Roboto:Black',sans-serif] font-black leading-[44px] relative shrink-0 text-[#121b2f] text-[38px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                3. Wireframes desktop
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#5d6678] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Organise le Hub, la page À propos, la liste/grille des cinq projets et une fiche projet modèle construite avec le contenu réel du projet 1, dans les quatre gabarits desktop de 1440 px placés dans la section adjacente.
              </p>
            </div>
          </div>
          <div className="bg-[#f5f2ff] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Repère d’action / Section adjacente">
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[14px] items-center px-[16px] py-[12px] relative size-full">
                <Action />
                <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#121b2f] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Travaille directement dans les quatre gabarits desktop de la section adjacente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Action1() {
  return (
    <div className="bg-[#1e66f5] content-stretch flex items-start overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-name="Action">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🔗
      </p>
    </div>
  );
}

function NumeroConteneur15() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function NumeroConteneur16() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function NumeroConteneur17() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function NumeroConteneur18() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
    </div>
  );
}

function NumeroConteneur19() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
    </div>
  );
}

function NumeroConteneur20() {
  return (
    <div className="bg-[#6e3ded] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[32px]" data-name="Numéro / Conteneur">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6
      </p>
    </div>
  );
}

function VideoStoryboard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Vidéo / Storyboard">
      <div className="bg-[#f5f2ff] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Storyboard / Plan 1">
        <div className="content-stretch flex gap-[14px] items-start p-[14px] relative size-full">
          <NumeroConteneur15 />
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] mb-0">✎ DURÉE APPROXIMATIVE : 10s</p>
            <p className="leading-[22px] mb-0">✎ CE QU’ON VOIT : Moi assis</p>
            <p className="leading-[22px] mb-0">✎ TEXTE PRONONCÉ : Bonjour. mon nom est Éli Bousquet, et je suis un étudiant finissant en technique d’intégration multimédia.</p>
            <p className="leading-[22px]">✎ SON OU TEXTE AFFICHÉ : Logo de TIM</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f2ff] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Storyboard / Plan 2">
        <div className="content-stretch flex gap-[14px] items-start p-[14px] relative size-full">
          <NumeroConteneur16 />
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] mb-0">✎ DURÉE APPROXIMATIVE : 10s</p>
            <p className="leading-[22px] mb-0">✎ CE QU’ON VOIT : courts extraits de jeux et développement, moi qui parle</p>
            <p className="leading-[22px] mb-0">✎ TEXTE PRONONCÉ : J’ai un profil dev - jeux vidéo, recherchant bien évidemment un stage en jeux-vidéo ou tout ce qui entoure ce domaine.</p>
            <p className="leading-[22px]">✎ SON OU TEXTE AFFICHÉ : profil: dev - jeux, stage: jeux-vidéo, animation 3D, programmation</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f2ff] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Storyboard / Plan 3">
        <div className="content-stretch flex gap-[14px] items-start p-[14px] relative size-full">
          <NumeroConteneur17 />
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] mb-0">✎ DURÉE APPROXIMATIVE : 10s</p>
            <p className="leading-[22px] mb-0">✎ CE QU’ON VOIT : moi qui parle, entrecoupé par des clips reliés ou non aux qualités humaines</p>
            <p className="leading-[22px] mb-0">✎ TEXTE PRONONCÉ : Je me démarque par ma bonne communication, mon imagination et mon soucis du détail, tout en voulant aider les autres et trouver des solutions.</p>
            <p className="leading-[22px]">✎ SON OU TEXTE AFFICHÉ : Communication, imagination, entraide</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f2ff] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Storyboard / Plan 4">
        <div className="content-stretch flex gap-[14px] items-start p-[14px] relative size-full">
          <NumeroConteneur18 />
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] mb-0">✎ DURÉE APPROXIMATIVE : 10s</p>
            <p className="leading-[22px] mb-0">✎ CE QU’ON VOIT : Clips de travail dans les logiciels respectifs, avec les logos qui viennent avec</p>
            <p className="leading-[22px] mb-0">✎ TEXTE PRONONCÉ : Bien évidemment, j’ai des compétences poussées dans les logiciels comme Unity, Unreal Engine, Blender, avec une connaissance approfondie en Csharp, Blueprint, et j’en passe.</p>
            <p className="leading-[22px]">✎ SON OU TEXTE AFFICHÉ : Noms des logiciels et languages de programmation</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f2ff] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Storyboard / Plan 5">
        <div className="content-stretch flex gap-[14px] items-start p-[14px] relative size-full">
          <NumeroConteneur19 />
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#174ea6] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] mb-0">{`✎ DURÉE APPROXIMATIVE : 10s `}</p>
            <p className="leading-[22px] mb-0">✎ CE QU’ON VOIT : Moi qui parle, clips qui montrent mon pc, mes mangas et une pièce d’art</p>
            <p className="leading-[22px] mb-0">✎ TEXTE PRONONCÉ : Pour ce qui est de mes intérêts, ils tournent autour de mes compétences. J’aime les jeux-vidéos, les anime et mangas, et les arts.</p>
            <p className="leading-[22px]">✎ SON OU TEXTE AFFICHÉ : Jeux-Vidéos, Anime/Mangas, Arts</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f2ff] h-[116px] relative rounded-[12px] shrink-0 w-full" data-name="Storyboard / Plan 6">
        <div className="content-stretch flex gap-[14px] items-start p-[14px] relative size-full">
          <NumeroConteneur20 />
          <div className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#174ea6] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] mb-0">✎ DURÉE APPROXIMATIVE : 10s</p>
            <p className="leading-[22px] mb-0">✎ CE QU’ON VOIT : Moi qui parle, les domaines et logiciels/languages flottent et forment une masse qui explose, mettant fin à la vidéo.</p>
            <p className="leading-[22px] mb-0">✎ TEXTE PRONONCÉ : Bref, si vous cherchez quelqu’un de polyvalent mais bon dans tous les domaines présentés, alors ce portfolio vous intéressera. On se voit en stage.</p>
            <p className="leading-[22px]">✎ SON OU TEXTE AFFICHÉ : Domaines présentés (JV, Animation 3D, Prog)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component05PlanAudiovisuel() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="05 — Plan audiovisuel">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Vidéo / Introduction">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative size-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#6e3ded] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                M2 — VIDÉO PERSONNELLE
              </p>
              <p className="font-['Roboto:Black',sans-serif] font-black leading-[44px] relative shrink-0 text-[#121b2f] text-[38px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                4. Plan audiovisuel
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#5d6678] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Consulte d’abord le document de référence ci-dessous. Il explique le livrable et t’aide à planifier ce que l’on verra et ce que tu diras. Aucun scénario littéraire séparé n’est demandé.
              </p>
            </div>
          </div>
          <div className="bg-[#edf3ff] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Repère d’action / Vidéo">
            <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[14px] items-center px-[16px] py-[12px] relative size-full">
                <Action1 />
                <a className="[word-break:break-word] block flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#121b2f] text-[14px]" href="https://docs.google.com/document/d/1-f6Rrg7cCBgDbKOAYBUXOFBNnoxyssWKJSOPplVgs9A/edit" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
                  <p className="cursor-pointer leading-[20px]">Consulter le document « Planification de la vidéo de présentation »</p>
                </a>
              </div>
            </div>
          </div>
          <VideoStoryboard />
          <FormulaireEncadreDinformation className="bg-[#ecf9f1] h-[80px] relative rounded-[14px] shrink-0 w-full" teinte="Vert" texte="Les six séquences sont obligatoires. Duplique au plus deux lignes si le récit l’exige. Le plan doit pouvoir guider directement le tournage et le montage." titre="6 À 8 SÉQUENCES" />
        </div>
      </div>
    </div>
  );
}

function RemiseLiens() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Remise / Liens">
      <div className="bg-[#edf3ff] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Remise / Lien Figma">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            LIEN VERS TON FICHIER FIGMA PERSONNEL
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Vérifie que le fichier se trouve dans ton dossier Figma et qu’Alexandre possède l’accès Can edit.
          </p>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#174ea6] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`https://www.figma.com/design/9nLj6kT9uCfnJOW9cOWZOQ/Portfolio-2026---Bousquet-%C3%89li?node-id=11241-1886&t=AX1sxT4KI0sYP5YA-1`}</p>
        </div>
      </div>
      <div className="bg-[#edf3ff] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Remise / Lien Médias">
        <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#5d6678] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            LIEN VERS TON DOSSIER GOOGLE DRIVE DU COURS
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#5d6678] text-[13px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Réutilise le dossier créé au M1 et vérifie l’accès demandé au professeur.
          </p>
          <a className="block font-['Roboto:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#174ea6] text-[17px] w-full" href="https://drive.google.com/drive/folders/1VsakubKBjNQmhJzJOsjoynmwjjnhOh4y?usp=drive_link" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
            <p className="cursor-pointer leading-[24px]">{`https://drive.google.com/drive/folders/1VsakubKBjNQmhJzJOsjoynmwjjnhOh4y?usp=drive_link`}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function EtatCase() {
  return (
    <div className="bg-[#059688] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[22px]" data-name="État / Case">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✓
      </p>
    </div>
  );
}

function EtatCase1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[22px]" data-name="État / Case">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full" />
      <div aria-hidden className="absolute border border-[#059688] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function EtatCase2() {
  return (
    <div className="bg-[#059688] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[22px]" data-name="État / Case">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✓
      </p>
    </div>
  );
}

function VerificationsColonne() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="Vérifications / Colonne 1">
      <div className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Vérification / 01">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
            <EtatCase />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] min-w-px relative text-[#121b2f] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Le contenu maître et la page À propos sont complets : profil et intérêts professionnels, proposition de valeur, compétences et outils, qualités, accroche, présentation, intérêts et loisirs, portrait, vidéo, appels à l’action et contact
            </p>
          </div>
        </div>
      </div>
      <FormulaireValidation className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" enonce="Les trois projets validés dans M1 sont structurés en au moins cinq étapes chacun" />
      <FormulaireValidation className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" enonce="Chaque étape indique un titre, une phrase courte et le média prévu" />
      <div className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Vérification / 04">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
            <EtatCase1 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] min-w-px relative text-[#121b2f] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              L’ensemble des cinq étapes rend visibles le défi, la solution et le résultat de chaque projet
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Vérification / 05">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
            <EtatCase2 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] min-w-px relative text-[#121b2f] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Les quatre wireframes desktop — Hub, À propos, liste/grille des cinq projets et fiche projet modèle — sont réalisés dans la section adjacente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EtatCase3() {
  return (
    <div className="bg-[#059688] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[22px]" data-name="État / Case">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✓
      </p>
    </div>
  );
}

function EtatCase4() {
  return (
    <div className="bg-[#059688] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[22px]" data-name="État / Case">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✓
      </p>
    </div>
  );
}

function VerificationsColonne1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="Vérifications / Colonne 2">
      <div className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Vérification / 07">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
            <EtatCase3 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] min-w-px relative text-[#121b2f] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              La liste/grille présente les cinq projets et la fiche modèle utilise le contenu réel du projet 1
            </p>
          </div>
        </div>
      </div>
      <FormulaireValidation className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" enonce="Le plan audiovisuel comporte de 6 à 8 séquences" etat="Validé" />
      <div className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="Vérification / 09">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[14px] relative size-full">
            <EtatCase4 />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] min-w-px relative text-[#121b2f] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Les liens vers le fichier Figma personnel et le dossier Google Drive du cours sont accessibles
            </p>
          </div>
        </div>
      </div>
      <FormulaireValidation className="bg-[#e9faf6] h-[52px] relative rounded-[10px] shrink-0 w-full" enonce="L’autoévaluation est complétée" etat="Validé" />
    </div>
  );
}

function RemiseDeuxColonnes() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Remise / Deux colonnes">
      <VerificationsColonne />
      <VerificationsColonne1 />
    </div>
  );
}

function CriterePositionnementEtCible() {
  return (
    <div className="bg-[#edf3ff] h-[220px] relative rounded-[15px] shrink-0 w-[230px]" data-name="Critère / Positionnement et cible">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[18px] py-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Roboto:Black',sans-serif] font-black h-[36px] leading-[38px] relative shrink-0 text-[#1e66f5] text-[28px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          10%
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold h-[48px] leading-[24px] relative shrink-0 text-[#121b2f] text-[16px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Contenu maître et À propos
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal h-[68px] leading-[21px] relative shrink-0 text-[#5d6678] text-[13px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Clarté, concision, personnalisation et cohérence des contenus.
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function CritereCinqProjetsEtPreuves() {
  return (
    <div className="bg-[#ecf9f1] h-[220px] relative rounded-[15px] shrink-0 w-[230px]" data-name="Critère / Cinq projets et preuves">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[18px] py-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Roboto:Black',sans-serif] font-black h-[36px] leading-[38px] relative shrink-0 text-[#1e66f5] text-[28px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          20%
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold h-[48px] leading-[24px] relative shrink-0 text-[#121b2f] text-[16px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Récits de projets
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal h-[68px] leading-[21px] relative shrink-0 text-[#5d6678] text-[13px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Structure des cinq étapes, progression et preuves prévues.
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function CritereDirectionArtistiqueInitiale() {
  return (
    <div className="bg-[#f5f2ff] h-[220px] relative rounded-[15px] shrink-0 w-[230px]" data-name="Critère / Direction artistique initiale">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[18px] py-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Roboto:Black',sans-serif] font-black h-[36px] leading-[38px] relative shrink-0 text-[#1e66f5] text-[28px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          40 %
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold h-[48px] leading-[24px] relative shrink-0 text-[#121b2f] text-[16px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Wireframes desktop
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal h-[68px] leading-[21px] relative shrink-0 text-[#5d6678] text-[13px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Hiérarchie, clarté et utilisation du contenu réel.
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function CritereSuiteDoutils() {
  return (
    <div className="bg-[#fff8e3] h-[220px] relative rounded-[15px] shrink-0 w-[230px]" data-name="Critère / Suite d’outils">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[18px] py-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Roboto:Black',sans-serif] font-black h-[36px] leading-[38px] relative shrink-0 text-[#1e66f5] text-[28px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          15 %
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold h-[48px] leading-[24px] relative shrink-0 text-[#121b2f] text-[16px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Plan audiovisuel
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal h-[68px] leading-[21px] relative shrink-0 text-[#5d6678] text-[13px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Pertinence, clarté et faisabilité.
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function CritereAutoevaluation() {
  return (
    <div className="bg-[#fff8e3] h-[220px] relative rounded-[15px] shrink-0 w-[230px]" data-name="Critère / Autoévaluation">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[18px] py-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Roboto:Black',sans-serif] font-black h-[36px] leading-[38px] relative shrink-0 text-[#1e66f5] text-[28px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          5 %
        </p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold h-[48px] leading-[24px] relative shrink-0 text-[#121b2f] text-[16px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Autoévaluation
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal h-[68px] leading-[21px] relative shrink-0 text-[#5d6678] text-[13px] w-[194px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Note sur 5, points forts et amélioration ciblée.
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dae5] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function EvaluationCinqCriteres() {
  return (
    <div className="content-stretch flex gap-[16px] h-[220px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Évaluation / Cinq critères">
      <CriterePositionnementEtCible />
      <CritereCinqProjetsEtPreuves />
      <CritereDirectionArtistiqueInitiale />
      <CritereSuiteDoutils />
      <CritereAutoevaluation />
    </div>
  );
}

function M2CriteresDevaluation() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="M2 / Critères d’évaluation">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#121b2f] text-[24px] w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Critères d’évaluation
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#5d6678] text-[14px] w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Le module vaut 10 % de la note finale du cours.
      </p>
      <EvaluationCinqCriteres />
    </div>
  );
}

function M2AutoevaluationNoteGlobale() {
  return (
    <div className="absolute bg-[#f0f6ff] border border-[#8fb0f0] border-solid h-[220px] left-0 overflow-clip rounded-[12px] top-[81px] w-[384px]" data-name="M2 / Autoévaluation / Note globale">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[44px] leading-[22px] left-[17px] text-[#121b2f] text-[14px] top-[19px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        NOTE GLOBALE — 5 %
      </p>
      <p className="absolute font-['Roboto:Black','Noto_Sans:Black','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Black','Noto_Sans_Symbols2:Regular',sans-serif] font-black h-[112px] leading-[21px] left-[17px] text-[#174ea6] text-[28px] top-[81px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✎ __ / 5
      </p>
    </div>
  );
}

function M2AutoevaluationPointsForts() {
  return (
    <div className="absolute bg-[#f0f6ff] border border-[#8fb0f0] border-solid font-['Roboto:Bold',sans-serif] font-bold h-[220px] left-[416px] overflow-clip rounded-[12px] top-[81px] w-[384px]" data-name="M2 / Autoévaluation / Points forts">
      <p className="absolute h-[44px] leading-[22px] left-[17px] text-[#121b2f] text-[14px] top-[19px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        POINTS FORTS — OBLIGATOIRE
      </p>
      <p className="absolute h-[112px] leading-[21px] left-[17px] text-[#174ea6] text-[16px] top-[81px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Le wireframe est très précis et correspond aux exigences, on voit très clairement la direction artistique prévue pour le site. Les étapes et les informations sur les projets sont complètes et fournies.
      </p>
    </div>
  );
}

function M2AutoevaluationPointAAmeliorer() {
  return (
    <div className="absolute bg-[#f0f6ff] border border-[#8fb0f0] border-solid font-['Roboto:Bold',sans-serif] font-bold h-[220px] left-[832px] overflow-clip rounded-[12px] top-[81px] w-[384px]" data-name="M2 / Autoévaluation / Point à améliorer">
      <p className="absolute h-[44px] leading-[22px] left-[17px] text-[#121b2f] text-[14px] top-[19px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        POINT À AMÉLIORER — OBLIGATOIRE
      </p>
      <div className="absolute h-[112px] leading-[0] left-[17px] text-[#174ea6] text-[16px] top-[81px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[21px] mb-0">Personnaliser plus la maquette à mon image et fournir les images nécessaires à la présentation de projets, ajuster à la grille</p>
        <p className="leading-[21px]">​</p>
      </div>
    </div>
  );
}

function M2Autoevaluation() {
  return (
    <div className="[word-break:break-word] h-[325px] overflow-clip relative shrink-0 w-full" data-name="M2 / Autoévaluation">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[32px] leading-[30px] left-0 text-[#121b2f] text-[24px] top-0 w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Autoévaluation
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[21px] left-0 text-[#5d6678] text-[14px] top-[46px] w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Inscris ta note, puis complète obligatoirement les rubriques Points forts et Point à améliorer.
      </p>
      <M2AutoevaluationNoteGlobale />
      <M2AutoevaluationPointsForts />
      <M2AutoevaluationPointAAmeliorer />
    </div>
  );
}

function M2CorrectionResultat() {
  return (
    <div className="absolute bg-[#f0f6ff] border border-[#8fb0f0] border-solid h-[220px] left-0 overflow-clip rounded-[12px] top-[81px] w-[384px]" data-name="M2 / Correction / Résultat">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[44px] leading-[22px] left-[17px] text-[#121b2f] text-[14px] top-[19px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        RÉSULTAT GLOBAL
      </p>
      <p className="absolute font-['Roboto:Black','Noto_Sans:Black','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Black','Noto_Sans_Symbols2:Regular',sans-serif] font-black h-[112px] leading-[21px] left-[17px] text-[#174ea6] text-[28px] top-[81px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✎ __ / 100
      </p>
    </div>
  );
}

function M2CorrectionPointsForts() {
  return (
    <div className="absolute bg-[#f0f6ff] border border-[#8fb0f0] border-solid font-bold h-[220px] left-[416px] overflow-clip rounded-[12px] top-[81px] w-[384px]" data-name="M2 / Correction / Points forts">
      <p className="absolute font-['Roboto:Bold',sans-serif] h-[44px] leading-[22px] left-[17px] text-[#121b2f] text-[14px] top-[19px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        POINTS FORTS
      </p>
      <p className="absolute font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] h-[112px] leading-[21px] left-[17px] text-[#174ea6] text-[16px] top-[81px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✎ Inscris les principales réussites observées…
      </p>
    </div>
  );
}

function M2CorrectionPointAAmeliorer() {
  return (
    <div className="absolute bg-[#f0f6ff] border border-[#8fb0f0] border-solid font-bold h-[220px] left-[832px] overflow-clip rounded-[12px] top-[81px] w-[384px]" data-name="M2 / Correction / Point à améliorer">
      <p className="absolute font-['Roboto:Bold',sans-serif] h-[44px] leading-[22px] left-[17px] text-[#121b2f] text-[14px] top-[19px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        POINT À AMÉLIORER
      </p>
      <p className="absolute font-['Roboto:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] h-[112px] leading-[21px] left-[17px] text-[#174ea6] text-[16px] top-[81px] w-[348px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✎ Inscris la priorité d’amélioration et une piste concrète…
      </p>
    </div>
  );
}

function M2CorrectionDuProfesseur() {
  return (
    <div className="[word-break:break-word] h-[325px] overflow-clip relative shrink-0 w-full" data-name="M2 / Correction du professeur">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[32px] leading-[30px] left-0 text-[#121b2f] text-[24px] top-0 w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Correction du professeur
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[21px] left-0 text-[#5d6678] text-[14px] top-[46px] w-[1120px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Inscris le résultat global, les principales réussites et la priorité d’amélioration.
      </p>
      <M2CorrectionResultat />
      <M2CorrectionPointsForts />
      <M2CorrectionPointAAmeliorer />
    </div>
  );
}

function Component06RemiseCriteresEtAutoevaluation() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="06 — Remise, critères et autoévaluation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Remise / Introduction">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start relative size-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e66f5] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                M2 — AVANT LA REMISE
              </p>
              <p className="font-['Roboto:Black',sans-serif] font-black leading-[44px] relative shrink-0 text-[#121b2f] text-[38px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                5. Remise et évaluation (10%)
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#5d6678] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Vérifie les livrables et les accès, consulte les critères, puis complète ton autoévaluation avant le début de la première période de la semaine 3.
              </p>
            </div>
          </div>
          <FormulaireRepereDaction className="bg-[#e9faf6] h-[64px] relative rounded-[12px] shrink-0 w-full" type="Cocher" />
          <RemiseLiens />
          <div className="bg-[#edf3ff] h-[80px] relative rounded-[14px] shrink-0 w-full" data-name="Info / Pondération">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start px-[22px] py-[20px] relative size-full">
              <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e66f5] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                ÉVALUATION SOMMATIVE — 10 %
              </p>
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[23px] relative shrink-0 text-[#121b2f] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                Sont évalués : le contenu maître et les textes finaux de la page À propos, les récits de trois projets, les quatre wireframes desktop et le plan audiovisuel.
              </p>
            </div>
          </div>
          <RemiseDeuxColonnes />
          <M2CriteresDevaluation />
          <M2Autoevaluation />
          <M2CorrectionDuProfesseur />
        </div>
      </div>
    </div>
  );
}

export default function Module2FormulaireComplet() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-col gap-[24px] items-start pb-[64px] pt-[40px] px-[64px] relative size-full" data-name="Module 2 / Formulaire complet">
      <Component01EnTeteEtModeDemploi />
      <Component02ContenuMaitreSurLaPersonne />
      <Component03RecitDesTroisProjetsRetenus />
      <Component04WireframesDeStructure />
      <Component05PlanAudiovisuel />
      <Component06RemiseCriteresEtAutoevaluation />
    </div>
  );
}