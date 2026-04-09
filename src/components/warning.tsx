export default function Warning() {
  return (
    <div
      className="bg-yellow-100 border-l-4 animate-pulse rounded-2xl fixed top-40 left-20 z-90 border-yellow-500 text-yellow-700 p-4"
      role="alert"
    >
      <p className="font-bold">Aviso</p>
      <p>Site depreciado, versão expositiva.</p>
      <p>
        Visite meu site principal{' '}
        <a
          href="https://yurimachado.dev.br"
          target="_blank"
          className="text-red-600 text-lg underline"
          rel="noopener noreferrer"
        >
          aqui
        </a>
      </p>
    </div>
  );
}
