import React from "react";
import Image from "next/image";


export default function CertificatSection() {

    return (
        <section id="certificat" className="p-20 ">
            <div className="flex flex-row items-center justify-center gap-20">
                <div>
                    <Image
                        src="/images/eucert-certificate-stamp.png"
                        alt="Certificat img"
                        width={200}
                        height={200}
                        className="h-40 w-40"
                    />
                </div>

                <div className="flex flex-col gap-3 w-2/4">
                    <div className="flex flex-col">
                        <h3 className="text-[var(--text-primary)] font-bold text-xl">
                            Zertifizierung als Gutachter
                        </h3>
                        <h3 className="text-[var(--text-secondary)] text-xl">
                            Höchste internationale Anerkennung für Gutachter und Sachverständige.
                        </h3>
                    </div>

                    <p className="text-[var(--text-muted)] text-sm">
                        Zertifiziert als Sachverständiger für Wertermittlung und Baukostenermittlung und -abrechnung sowie Bauablaufstörungen nach DIN EN ISO/IEC 17024 (Personnel Certification No. 1-24-1113 EUcert)
                    </p>

                    <p className="text-[var(--text-muted)] text-sm">
                        Nach Prüfung und Empfehlung durch das European Committee for Quality Assurance EUC in Brüssel ist Prof. Dr. Christoph Wagener am 14.08.2024 von der Zertifizierungsstelle des EUC, European Certification EU Cert CYF., Regus House Malthouse Avenue, Cardiff Gate Business Park, Pontprennau- Cardiff Wales CF 238RU GB nach DIN EN ISO/ IEC 17024 zertifiziert worden.
                    </p>

                </div>
            </div>
        </section>
    );
}