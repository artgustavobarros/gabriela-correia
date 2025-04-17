"use client";

export function Copyright() {
  const year = new Date().getFullYear();
  return (
    <span>{`© Copyright ${year}. Todos os direitos são reservados.`}</span>
  );
}
