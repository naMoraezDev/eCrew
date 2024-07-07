import { FaCheckCircle } from "react-icons/fa";
import { SubscriptionCardProps } from "./types";
import { IoMdCloseCircle } from "react-icons/io";

export function SubscriptionCardView({
  pro,
  handleSubscribe,
}: SubscriptionCardProps) {
  return (
    <section className="flex flex-col gap-6 bg-zinc-900 rounded-lg overflow-hidden p-6 h-full">
      {pro ? (
        <h2 className="font-kanit font-medium text-2xl">
          eCrew <span className="text-3xl text-violet-500">PRO</span>
        </h2>
      ) : (
        <h2 className="font-kanit font-medium text-2xl">Padrão</h2>
      )}
      <div className="flex flex-col gap-4">
        <p className="flex items-center gap-2">
          {pro ? <FaCheckCircle /> : <IoMdCloseCircle size={20} />}
          <span>Acesso total ao conteúdo do site</span>
        </p>
        <p className="flex items-center gap-2">
          {pro ? <FaCheckCircle /> : <IoMdCloseCircle size={20} />}
          <span>Sem anuncios</span>
        </p>
        <p className="flex items-center gap-2">
          {pro ? <FaCheckCircle /> : <IoMdCloseCircle size={20} />}
          <span>Suporte prioritário</span>
        </p>
      </div>
      {pro && (
        <>
          <span className="text-6xl font-kanit text-violet-500">
            13,90 <span className="text-2xl text-zinc-50">BRL /mês</span>
          </span>
          <button
            onClick={handleSubscribe}
            className="bg-violet-500 bg-opacity-10 w-full px-24 self-center py-2 rounded-3xl text-violet-500 font-bold"
          >
            Assinar
          </button>
        </>
      )}
    </section>
  );
}
