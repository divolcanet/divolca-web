import { MapPin } from "lucide-react";
import { Reveal } from "../ui/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { officeProfile } from "../../data/office";
import { useLanguage } from "../../data/translations/LanguageContext";
import { t } from "../../data/translations";

export default function HeadOfficeSection() {
  const { lang } = useLanguage();
  return (
    <>
      <Reveal>
        <h2 className="font-fraunces text-3xl font-bold text-title text-center mb-10">{t.about.officeTitle[lang]}</h2>
      </Reveal>

      <Reveal delay={200}>
        <Card className=" max-w-3xl mx-auto">
          <CardHeader>
            <div className="w-14 h-14 rounded-full bg-primary-10/20 flex items-center justify-center mx-auto">
              <MapPin className="w-7 h-7 text-primary-50" />
            </div>
            <CardTitle className=" text-center">{officeProfile.title}</CardTitle>
          </CardHeader>
          <CardContent className=" text-center">
            <p className="text-body">{officeProfile.address}</p>
            <p className="text-dim text-sm mt-2">
              {officeProfile.email} <br /> {officeProfile.site}
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </>
  );
}
