import { PrivacyPolicyProps } from "./types";
import { MdPrivacyTip } from "react-icons/md";

export function PrivacyPolicyView({ isDesktop }: PrivacyPolicyProps) {
  return (
    <section className="flex flex-col gap-3 mb-10">
      <div
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h1 className="font-kanit font-medium text-3xl px-4 py-2 w-fit flex items-center gap-2">
          <MdPrivacyTip className="shrink-0" size={!isDesktop ? 64 : 30} />
          Política de Privacidade
        </h1>
      </div>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Coleta de Dados</h2>
        <p>Nosso site coleta as seguintes informações:</p>
        <ul className="list-disc list-inside">
          <li>
            Informações Pessoais: Nome, endereço de e-mail e outras informações
            fornecidas voluntariamente pelos usuários ao se inscreverem para
            receber atualizações ou comentar em artigos.
          </li>
          <li>
            Dados de Navegação: Endereço IP, tipo de navegador, dispositivo
            utilizado, páginas visitadas e tempo gasto no site.
          </li>
        </ul>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Uso dos Dados</h2>
        <p>Utilizamos os dados coletados para os seguintes fins:</p>
        <ul className="list-disc list-inside">
          <li>
            Envio de Atualizações: Enviar notícias, artigos e atualizações
            relevantes aos usuários que se inscreveram.
          </li>
          <li>
            Melhoria do Site: Analisar o comportamento dos usuários para
            melhorar a experiência de navegação e otimizar o conteúdo.
          </li>
        </ul>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">
          Compartilhamento de Dados
        </h2>
        <p>
          Não compartilhamos informações pessoais com terceiros sem o
          consentimento do usuário, exceto quando exigido por lei.
        </p>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Cookies</h2>
        <p>
          Nosso site utiliza cookies para personalizar conteúdo e anúncios, além
          de rastrear o comportamento do usuário. Os cookies podem ser
          desativados nas configurações do navegador.
        </p>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Segurança</h2>
        <p>
          Tomamos medidas para proteger os dados dos usuários, incluindo
          criptografia e acesso restrito.
        </p>
      </section>
      <section
        className={`
          ${isDesktop ? "px-10 py-6" : "p-6"}
          flex flex-col gap-4 bg-zinc-900 rounded-lg
        `}
      >
        <h2 className="font-kanit font-medium text-2xl">Contato</h2>
        <p>
          Se tiver alguma dúvida sobre nossa política de privacidade, entre em
          contato conosco pelo e-mail: contato@labcompy.com
        </p>
      </section>
    </section>
  );
}
