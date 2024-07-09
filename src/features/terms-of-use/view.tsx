import { TermsOfUseProps } from "./types";
import { IoMdListBox } from "react-icons/io";

export function TermsOfUse({ isDesktop }: TermsOfUseProps) {
  return (
    <section className="flex flex-col gap-3 mb-10">
      <div
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h1 className="font-kanit font-medium text-3xl px-4 py-2 w-fit flex items-center gap-2">
          <IoMdListBox /> Termos de Uso
        </h1>
        <p>
          Bem-vindo à eCrew! Ao acessar e utilizar nosso site, você concorda com
          os seguintes termos e condições:
        </p>
      </div>
      <ol className="list-decimal px-10 py-6 bg-zinc-900 rounded-lg flex flex-col gap-4">
        <li className="font-kanit font-bold">
          Conteúdo e Propriedade Intelectual:
        </li>
        <ul className="list-disc list-inside">
          <li>
            Todo o conteúdo publicado em nosso site, incluindo artigos, imagens
            e vídeos, é protegido por direitos autorais. Você não pode
            reproduzir, distribuir ou modificar esse conteúdo sem nossa
            autorização expressa.
          </li>
        </ul>
        <li className="font-kanit font-bold">Uso Responsável:</li>
        <ul className="list-disc list-inside">
          <li>
            Você concorda em usar nosso site de forma responsável e legal. Não é
            permitido:
            <ul className="list-disc list-inside pl-6">
              <li>Publicar conteúdo ofensivo, difamatório ou ilegal.</li>
              <li>
                Realizar atividades que possam prejudicar a segurança do site ou
                de outros usuários.
              </li>
              <li>
                Fazer uso indevido de nossos recursos ou interferir no
                funcionamento adequado do site.
              </li>
            </ul>
          </li>
        </ul>
        <li className="font-kanit font-bold">Comentários e Interação:</li>
        <ul className="list-disc list-inside">
          <li>
            Os comentários em nossos artigos são bem-vindos, desde que sejam
            respeitosos e relevantes. Reservamo-nos o direito de remover
            qualquer comentário inadequado.
          </li>
          <li>
            Você é responsável por suas interações com outros usuários e pelo
            conteúdo que publica.
          </li>
        </ul>
        <li className="font-kanit font-bold">Links Externos:</li>
        <ul className="list-disc list-inside">
          <li>
            Nosso site pode conter links para sites de terceiros. Não somos
            responsáveis pelo conteúdo ou práticas desses sites. Recomendamos
            que você revise os termos de uso e políticas de privacidade de cada
            site visitado.
          </li>
        </ul>
        <li className="font-kanit font-bold">Alterações nos Termos:</li>
        <ul className="list-disc list-inside">
          <li>
            Reservamo-nos o direito de alterar esses termos a qualquer momento.
            As alterações serão publicadas em nosso site e entrarão em vigor
            imediatamente.
          </li>
        </ul>
        <li className="font-kanit font-bold">Isenção de Responsabilidade:</li>
        <ul className="list-disc list-inside">
          <li>
            Nosso site fornece informações com base em fontes confiáveis, mas
            não garantimos sua precisão ou atualização. Você utiliza o conteúdo
            por sua conta e risco.
          </li>
        </ul>
        <li className="font-kanit font-bold">Contato:</li>
        <ul className="list-disc list-inside">
          <li>
            Se tiver alguma dúvida sobre nossos termos de uso, entre em contato
            conosco pelo e-mail: contato@labcompy.com
          </li>
        </ul>
      </ol>
    </section>
  );
}
