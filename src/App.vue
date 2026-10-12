<template>
  <v-app :dir="direction" :class="direction">
    <v-app-bar
      flat
      class="site-header"
      height="76"
      position="sticky"
      scroll-behavior="none"
      style="top: 0; z-index: 1000"
    >
      <v-container class="d-flex align-center justify-space-between ga-4">
        <a class="brand mx-2" href="#home" aria-label="MedLicense home"
          ><span>Med<span>License</span></span></a
        >
        <div class="d-none d-md-flex align-center ga-6 nav-links">
          <a href="#services">{{ t("navServices") }}</a
          ><a href="#countries">{{ t("navCountries") }}</a
          ><a href="#how">{{ t("navHow") }}</a>
        </div>
        <div class="d-flex align-center ga-2">
          <v-btn
            variant="text"
            class="locale-btn pointer-cursor"
            @click="switchLocale"
            >{{ isArabic ? "English" : "العربية" }}</v-btn
          >
          <v-btn color="primary" rounded="lg" class="header-cta mx-2"
            ><a href="#request">{{ t("navContact") }}</a></v-btn
          >
        </div>
      </v-container>
    </v-app-bar>

    <main>
      <!-- ================================================================
     HERO 
================================================================= -->
      <section id="home" class="hero-section">
        <v-parallax
          src="/images/hero-banner.png"
          height="760"
          class="hero-parallax"
        >
          <!-- Dark overlay for readable text -->
          <div class="hero-overlay"></div>

          <v-container
            :dir="direction"
            :class="direction"
            class="fill-height hero-container"
          >
            <div class="hero-layout">
              <div class="hero-content">
                <!-- Eyebrow / Trust Badge -->
                <div class="hero-badge">
                  <span class="badge-dot"></span>
                  <span>{{ t("eyebrow") }}</span>
                </div>

                <!-- Main Heading -->
                <h1 class="hero-title">
                  {{ t("heroTitle") }}
                </h1>

                <!-- Supporting Copy -->
                <p class="hero-description">
                  {{ t("heroText") }}
                </p>

                <!-- Primary Actions -->
                <div class="hero-actions">
                  <v-btn
                    color="primary"
                    size="x-large"
                    rounded="lg"
                    href="#request"
                    class="hero-primary-btn"
                    :append-icon="
                      locale === 'ar' ? 'mdi-arrow-left' : 'mdi-arrow-right'
                    "
                  >
                    {{ t("requestNow") }}
                  </v-btn>

                  <v-btn
                    variant="outlined"
                    color="white"
                    size="x-large"
                    rounded="lg"
                    href="#services"
                    class="hero-secondary-btn"
                  >
                    {{ t("learnMore") }}
                  </v-btn>
                </div>

                <!-- Trust Indicator -->
                <div class="trust-row">
                  <div class="trust-item">
                    <v-icon icon="mdi-shield-check-outline" size="22" />
                    <span>{{ t("trustTitle") }}</span>
                  </div>
                </div>
              </div>
            </div>
          </v-container>

          <!-- Bottom visual transition -->
          <div class="hero-bottom-fade"></div>
        </v-parallax>
      </section>

      <section class="trust-strip">
        <v-container
          class="trust-strip-inner"
          :dir="direction"
          :class="direction"
        >
          <div class="trust-strip-icon">
            <v-icon icon="mdi-information-outline" size="26" />
          </div>
          <div>
            <h2>{{ t("trustTitle") }}</h2>
            <p>{{ t("trustText") }}</p>
          </div>
        </v-container>
      </section>

      <section id="services" class="section-space">
        <v-container :dir="direction" :class="direction">
          <div class="section-heading">
            <h2>{{ t("servicesTitle") }}</h2>
            <p>{{ t("servicesSubtitle") }}</p>
          </div>
          <v-row>
            <v-col cols="12" md="4"
              ><v-card class="service-card" rounded="xl" elevation="0">
                <div class="service-icon blue">
                  <v-icon icon="mdi-file-document-check-outline" size="30" />
                </div>
                <h3>{{ t("dataflowTitle") }}</h3>
                <p>{{ t("dataflowText") }}</p>
                <v-btn href="#request" class="text-link"
                  >{{ t("requestNow") }}
                </v-btn>
              </v-card></v-col
            >
            <v-col cols="12" md="4"
              ><v-card class="service-card" rounded="xl" elevation="0">
                <div class="service-icon teal">
                  <v-icon icon="mdi-clipboard-check-outline" size="30" />
                </div>
                <h3>{{ t("examTitle") }}</h3>
                <p>{{ t("examText") }}</p>
                <v-btn href="#request" class="text-link"
                  >{{ t("requestNow") }}
                </v-btn>
              </v-card></v-col
            >
            <v-col cols="12" md="4"
              ><v-card class="service-card" rounded="xl" elevation="0">
                <div class="service-icon violet">
                  <v-icon icon="mdi-stethoscope" size="30" />
                </div>
                <h3>{{ t("licenseTitle") }}</h3>
                <p>{{ t("licenseText") }}</p>
                <v-btn href="#request" class="text-link px-3"
                  >{{ t("requestNow") }}
                </v-btn>
              </v-card></v-col
            >
          </v-row>
        </v-container>
      </section>

      <section id="countries" class="countries-section section-space">
        <v-container :dir="direction" :class="direction">
          <div class="section-heading">
            <h2>{{ t("countriesTitle") }}</h2>
            <p>{{ t("countriesSubtitle") }}</p>
          </div>
          <div class="country-grid">
            <div
              v-for="country in countries"
              :key="country.value"
              class="country-item"
            >
              <span class="country-icon"
                ><v-icon icon="mdi-map-marker-radius-outline" /></span
              ><span>{{ t(country.key) }}</span
              ><v-icon
                class="country-arrow"
                :icon="
                  direction === 'ltr'
                    ? 'mdi-arrow-top-left'
                    : 'mdi-arrow-top-right'
                "
                size="17"
              />
            </div>
          </div>
        </v-container>
      </section>

      <section id="how" class="section-space">
        <v-container :dir="direction" :class="direction">
          <div class="section-heading">
            <h2>{{ t("howTitle") }}</h2>
          </div>
          <div class="steps-grid">
            <div class="step-item">
              <span class="step-number">01</span>
              <div class="step-icon">
                <v-icon icon="mdi-text-box-edit-outline" size="28" />
              </div>
              <h3>{{ t("step1") }}</h3>
              <p>{{ t("step1Text") }}</p>
            </div>
            <div class="step-connector">
              <v-icon
                :icon="
                  direction === 'ltr' ? 'mdi-arrow-right' : 'mdi-arrow-left'
                "
              />
            </div>
            <div class="step-item">
              <span class="step-number">02</span>
              <div class="step-icon">
                <v-icon icon="mdi-account-voice" size="28" />
              </div>
              <h3>{{ t("step2") }}</h3>
              <p>{{ t("step2Text") }}</p>
            </div>
            <div class="step-connector">
              <v-icon
                :icon="
                  direction === 'ltr' ? 'mdi-arrow-right' : 'mdi-arrow-left'
                "
              />
            </div>
            <div class="step-item">
              <span class="step-number">03</span>
              <div class="step-icon">
                <v-icon icon="mdi-clipboard-text-clock-outline" size="28" />
              </div>
              <h3>{{ t("step3") }}</h3>
              <p>{{ t("step3Text") }}</p>
            </div>
          </div>
        </v-container>
      </section>

      <section id="request" class="request-section section-space">
        <v-container :dir="direction" :class="direction">
          <div class="request-layout">
            <div class="request-copy">
              <h2>{{ t("formTitle") }}</h2>
              <p>{{ t("formSubtitle") }}</p>
              <div class="contact-points">
                <div>
                  <span><v-icon icon="mdi-check-circle-outline" /></span
                  >{{ t("trustTitle") }}
                </div>
                <div>
                  <span><v-icon icon="mdi-lock-outline" /></span
                  >{{ t("consent") }}
                </div>
              </div>
              <v-btn
                v-if="whatsappNumber"
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                color="success"
                variant="outlined"
                rounded="lg"
                prepend-icon="mdi-whatsapp"
                class="mt-5"
                >{{ t("whatsapp") }}</v-btn
              >
            </div>
            <v-card class="request-card" rounded="xl" elevation="0">
              <div v-if="submittedReference" class="success-panel">
                <div class="success-icon">
                  <v-icon icon="mdi-check-circle-outline" size="42" />
                </div>
                <h3>{{ t("successTitle") }}</h3>
                <p>{{ t("successText") }}</p>
                <div class="reference-box">
                  <span>{{ t("reference") }}</span
                  ><strong>{{ submittedReference }}</strong>
                </div>
                <v-btn
                  color="primary"
                  block
                  rounded="lg"
                  class="mt-5"
                  @click="goHome"
                  >{{ t("goHome") }}</v-btn
                >
              </div>
              <form v-else ref="formRef" @submit.prevent="onSubmit">
                <v-row dense>
                  <v-col cols="12"
                    ><label class="field-label">{{ t("fullName") }} *</label
                    ><v-text-field
                      v-model="form.fullName"
                      :placeholder="t('fullName')"
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                      autocomplete="name"
                  /></v-col>
                  <v-col cols="12"
                    ><label class="field-label">{{ t("phone") }} *</label
                    ><v-text-field
                      v-model="form.phone"
                      :placeholder="'+20 100 000 0000'"
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                      type="tel"
                      autocomplete="tel"
                  /></v-col>
                  <v-col cols="12" sm="6"
                    ><label class="field-label">{{ t("profession") }} *</label
                    ><v-select
                      v-model="form.profession"
                      :items="[
                        { title: t('doctor'), value: 'doctor' },
                        { title: t('nurse'), value: 'nurse' },
                      ]"
                      :placeholder="t('choose')"
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                  /></v-col>
                  <v-col cols="12" sm="6"
                    ><label class="field-label">{{ t("specialty") }} *</label
                    ><v-text-field
                      v-model="form.specialty"
                      :placeholder="t('specialty')"
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                  /></v-col>
                  <v-col cols="12" sm="6"
                    ><label class="field-label">{{ t("country") }} *</label
                    ><v-select
                      v-model="form.targetCountry"
                      :items="
                        countries.map((c) => ({
                          title: t(c.key),
                          value: c.value,
                        }))
                      "
                      :placeholder="t('choose')"
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                  /></v-col>
                  <v-col cols="12" sm="6"
                    ><label class="field-label">{{ t("service") }} *</label
                    ><v-select
                      v-model="form.serviceType"
                      :items="
                        services.map((s) => ({
                          title: t(s.key),
                          value: s.value,
                        }))
                      "
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                  /></v-col>
                  <v-col cols="12"
                    ><label class="field-label">{{ t("contactTime") }}</label
                    ><v-text-field
                      v-model="form.preferredContactTime"
                      :placeholder="t('contactTime')"
                      variant="outlined"
                      density="comfortable"
                      rounded="lg"
                      hide-details="auto"
                  /></v-col>
                  <v-col cols="12"
                    ><v-checkbox
                      v-model="form.consentToShare"
                      color="primary"
                      hide-details="auto"
                      density="compact"
                      class="consent-checkbox"
                      ><template #label
                        ><span class="consent-label"
                          >{{ t("consent") }} *</span
                        ></template
                      ></v-checkbox
                    ></v-col
                  >
                  <v-col cols="12"
                    ><v-btn
                      type="submit"
                      color="primary"
                      size="large"
                      block
                      rounded="lg"
                      :loading="loading"
                      :append-icon="
                        direction === 'ltr'
                          ? 'mdi-arrow-right'
                          : 'mdi-arrow-left'
                      "
                      >{{ loading ? t("sending") : t("submit") }}</v-btn
                    ></v-col
                  >
                </v-row>
              </form>
            </v-card>
          </div>
        </v-container>
      </section>

      <section class="faq-section section-space">
        <v-container :dir="direction" :class="direction">
          <div class="section-heading">
            <h2>{{ t("faqTitle") }}</h2>
          </div>
          <div class="faq-list">
            <v-expansion-panels variant="accordion" rounded="lg"
              ><v-expansion-panel
                ><v-expansion-panel-title>{{
                  t("faq1")
                }}</v-expansion-panel-title
                ><v-expansion-panel-text>{{
                  t("faq1Answer")
                }}</v-expansion-panel-text></v-expansion-panel
              ><v-expansion-panel
                ><v-expansion-panel-title>{{
                  t("faq2")
                }}</v-expansion-panel-title
                ><v-expansion-panel-text>{{
                  t("faq2Answer")
                }}</v-expansion-panel-text></v-expansion-panel
              ><v-expansion-panel
                ><v-expansion-panel-title>{{
                  t("faq3")
                }}</v-expansion-panel-title
                ><v-expansion-panel-text>{{
                  t("faq3Answer")
                }}</v-expansion-panel-text></v-expansion-panel
              ></v-expansion-panels
            >
          </div>
        </v-container>
      </section>
    </main>

    <footer class="site-footer">
      <v-container :dir="direction" :class="direction">
        <div class="footer-top">
          <a class="brand footer-brand" href="#home"
            ><span>Med<span>License</span></span></a
          >
          <p>{{ t("footerDisclaimer") }}</p>
        </div>
        <div class="footer-bottom">
          <span>© {{ new Date().getFullYear() }} MedLicense</span>
          <div>
            <a href="#privacy">{{ t("privacy") }}</a
            ><a href="#terms">{{ t("terms") }}</a>
          </div>
        </div>
      </v-container>
    </footer>
    <v-snackbar
      v-model="snackbar"
      color="error"
      location="top"
      :timeout="5000"
      >{{ errorMessage }}</v-snackbar
    >
  </v-app>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { submitLead } from "./services/api.js";

const { t, locale } = useI18n();
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
const formRef = ref(null);
const loading = ref(false);
const submittedReference = ref("");
const errorMessage = ref("");
const snackbar = ref(false);
const form = reactive({
  fullName: "",
  phone: "",
  profession: "",
  specialty: "",
  targetCountry: "",
  serviceType: "dataflow",
  preferredContactTime: "",
  consentToShare: false,
});
const countries = [
  { value: "saudi-arabia", key: "saudi" },
  { value: "qatar", key: "qatar" },
  { value: "uae", key: "uae" },
  { value: "oman", key: "oman" },
  { value: "bahrain", key: "bahrain" },
  { value: "kuwait", key: "kuwait" },
];
const services = [
  { value: "dataflow", key: "dataflow" },
  { value: "licensing-exam", key: "exam" },
  { value: "professional-licensing", key: "licensing" },
];
const whatsappUrl = computed(() => {
  const text = isArabic.value
    ? "مرحبًا، أود الاستفسار عن خدمات MedLicense."
    : "Hello, I would like to ask about MedLicense services.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
});

const isArabic = computed(() => locale.value === "ar");
const direction = computed(() => (isArabic.value ? "rtl" : "ltr"));

function switchLocale() {
  locale.value = isArabic.value ? "en" : "ar";
  localStorage.setItem("medlicense-locale", locale.value);
  document.documentElement.lang = locale.value;
  document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
}

watch(
  locale,
  (value) => {
    const dir = value === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = value;
    document.documentElement.dir = dir;
  },
  { immediate: true },
);

async function onSubmit() {
  errorMessage.value = "";
  submittedReference.value = "";

  if (
    !form.fullName.trim() ||
    !form.phone.trim() ||
    !form.profession ||
    !form.specialty.trim() ||
    !form.targetCountry ||
    !form.serviceType ||
    !form.consentToShare
  ) {
    errorMessage.value = t("required");
    snackbar.value = true;
    return;
  }

  loading.value = true;

  try {
    const campaign =
      new URLSearchParams(window.location.search).get("utm_campaign") || "";

    const payload = {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      profession: form.profession,
      specialty: form.specialty.trim(),
      targetCountry: form.targetCountry,
      serviceType: form.serviceType,
      preferredContactTime: form.preferredContactTime.trim(),
      consentToShare: form.consentToShare,
      campaign,
    };

    const result = await submitLead(payload);

    submittedReference.value = result.reference;

    Object.assign(form, {
      fullName: "",
      phone: "",
      profession: "",
      specialty: "",
      targetCountry: "",
      serviceType: "dataflow",
      preferredContactTime: "",
      consentToShare: false,
    });
  } catch (error) {
    if (error.response?.status === 409) {
      errorMessage.value = t("duplicate");
    } else if (error.response?.status === 429) {
      errorMessage.value =
        error.response?.data?.message ||
        "Too many attempts. Please try again later.";
    } else {
      errorMessage.value = error.response?.data?.message || t("error");
    }

    snackbar.value = true;
  } finally {
    loading.value = false;
  }
}

function goHome() {
  // Clear all form fields
  Object.assign(form, {
    fullName: "",
    phone: "",
    profession: "",
    specialty: "",
    targetCountry: "",
    serviceType: "dataflow",
    preferredContactTime: "",
    consentToShare: false,
  });

  // Hide the success panel and show the form again
  submittedReference.value = "";

  // Clear any previous error messages
  errorMessage.value = "";
  snackbar.value = false;

  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped>
/* ================================================================
   GLOBAL DIRECTIONAL LAYOUT
================================================================ */

.rtl {
  direction: rtl;
}

.ltr {
  direction: ltr;
}

/* Text alignment */
.rtl .section-heading,
.rtl .request-copy,
.rtl .footer-top,
.rtl .field-label {
  text-align: right;
}

.ltr .section-heading,
.ltr .request-copy,
.ltr .footer-top,
.ltr .field-label {
  text-align: left;
}

/* Header navigation */
.rtl .nav-links {
  direction: rtl;
}

.ltr .nav-links {
  direction: ltr;
}

/* Form controls */
.rtl .request-card {
  direction: rtl;
  text-align: right;
}

.ltr .request-card {
  direction: ltr;
  text-align: left;
}

/* Country cards */
.rtl .country-item {
  direction: rtl;
  text-align: right;
}

.ltr .country-item {
  direction: ltr;
  text-align: left;
}

/* Footer links */
.rtl .footer-bottom,
.rtl .footer-bottom > div {
  direction: rtl;
}

.ltr .footer-bottom,
.ltr .footer-bottom > div {
  direction: ltr;
}

.hero-container.ltr .hero-description {
  margin-inline: auto 0;
}
/* ================================================================
   SITE HEADER
================================================================ */
.site-header {
  position: sticky !important;
  top: 0;
  z-index: 1000;
  background-color: #fff !important;
  border-bottom: 1px solid rgba(14, 76, 131, 0.08);
}

/* ================================================================
   HERO SECTION
================================================================= */
.hero-section {
  position: relative;
  overflow: hidden;
  background-color: #102d46;
  padding: 0;
}

.hero-parallax {
  position: relative;
  isolation: isolate;
}

/* Background image overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(7, 27, 45, 0.75);
  pointer-events: none;
}

/* Keep content above the overlay */
.hero-container {
  position: relative;
  z-index: 2;
  min-height: 760px;
  padding-top: 80px;
  padding-bottom: 100px;
}

.hero-layout {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 560px;
}

.hero-content {
  width: 100%;
  max-width: 700px;
  color: #fff;
}

.hero-container.rtl .hero-content {
  margin-left: auto;
  margin-right: 0;
  text-align: right;
}

.hero-container.ltr .hero-content {
  margin-left: 0;
  margin-right: auto;
  text-align: left;
}

/* Eyebrow badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.09);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 8px;
  border-radius: 50%;
  background: #65d6c3;
  box-shadow: 0 0 12px rgba(101, 214, 195, 0.55);
}

/* Heading */
.hero-title {
  max-width: 680px;
  margin: 0 0 24px;
  color: #fff;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

/* Description */
.hero-description {
  max-width: 590px;
  margin: 0 0 34px;
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 400;
  line-height: 1.9;
}

.hero-container.rtl .hero-description {
  margin-left: auto;
  margin-right: 0;
}

/* CTA buttons */
.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 36px;
}

.hero-container.rtl .hero-actions {
  justify-content: flex-start;
}

.hero-container.ltr .hero-actions {
  justify-content: flex-start;
}

.hero-primary-btn,
.hero-secondary-btn {
  min-height: 56px;
  padding-inline: 24px;
  font-weight: 700;
  letter-spacing: 0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.hero-primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(14, 76, 131, 0.35);
}

.hero-secondary-btn {
  border-color: rgba(255, 255, 255, 0.65);
  background: rgba(255, 255, 255, 0.04);
}

.hero-secondary-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

/* Trust indicator */
.trust-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  font-weight: 500;
}

.trust-item .v-icon {
  color: #65d6c3;
}

/* Bottom transition */
.hero-bottom-fade {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  height: 90px;
  background: linear-gradient(to bottom, transparent, rgba(7, 27, 45, 0.22));
  pointer-events: none;
}

/* ================================================================
   RESPONSIVE
================================================================= */

@media (max-width: 960px) {
  .hero-container {
    min-height: 680px;
    padding-top: 64px;
    padding-bottom: 80px;
  }

  .hero-layout {
    min-height: 520px;
  }

  .hero-content {
    max-width: 620px;
  }

  .hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(7, 27, 45, 0.93) 0%,
      rgba(7, 35, 57, 0.82) 65%,
      rgba(8, 43, 68, 0.65) 100%
    );
  }
}

@media (max-width: 600px) {
  .hero-container {
    min-height: 640px;
    padding: 60px 24px 76px;
  }

  .hero-layout {
    min-height: 500px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-badge {
    margin-bottom: 22px;
    padding: 8px 12px;
    font-size: 0.8rem;
  }

  .hero-title {
    margin-bottom: 18px;
    font-size: clamp(2.25rem, 10vw, 3.2rem);
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  .hero-description {
    margin-bottom: 28px;
    font-size: 1rem;
    line-height: 1.8;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  }

  .hero-actions .v-btn {
    width: 100%;
  }

  .trust-row {
    gap: 12px;
  }

  .trust-item {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(7, 27, 45, 0.86) 0%,
      rgba(7, 27, 45, 0.91) 55%,
      rgba(7, 27, 45, 0.95) 100%
    );
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-primary-btn,
  .hero-secondary-btn {
    transition: none;
  }
}

/* Trust indicator */
.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.95rem;
}

.trust-item :deep(.v-icon) {
  color: #5ed39b;
}

/* ================================================================
   RESPONSIVE
================================================================ */

@media (max-width: 960px) {
  .hero-layout {
    min-height: 560px;
    padding-block: 40px;
  }

  .hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(3, 27, 51, 0.88) 0%,
      rgba(5, 40, 72, 0.72) 100%
    );
  }
}

@media (max-width: 600px) {
  .hero-layout {
    min-height: 520px;
    padding-block: 36px;
  }

  .hero-title {
    font-size: 2.5rem;
    line-height: 1.12;
  }

  .hero-description {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.7;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .v-btn {
    width: 100%;
  }

  .trust-row {
    gap: 16px;
  }
}
</style>
