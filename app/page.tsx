"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  Shield, 
  Code2, 
  BarChart3, 
  Layers, 
  Eye,
  Clock,
  Activity,
  Users,
  CheckCircle2,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Database,
  LineChart,
  Cloud,
  Settings,
  TrendingUp
} from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const navItems = [
    { label: 'Platform', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Company', hasDropdown: true },
  ]

  const stats = [
    { icon: TrendingUp, label: 'Events Processed', value: '12.8T', change: '+23.4%', changeLabel: 'vs last 30 days' },
    { icon: Clock, label: 'Query Performance', value: '42ms', change: '', changeLabel: 'avg response time' },
    { icon: BarChart3, label: 'Data Throughput', value: '3.6TB/s', change: '', changeLabel: 'peak ingestion rate' },
    { icon: Users, label: 'Active Users', value: '28.7K', change: '+18.7%', changeLabel: 'vs last 30 days' },
    { icon: CheckCircle2, label: 'Uptime', value: '99.99%', change: '', changeLabel: 'last 30 days' },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Stream and analyze data in real-time with sub-second latency.',
      size: 'large',
      hasChart: true,
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Built to scale from gigabytes to petabytes effortlessly.',
      size: 'medium',
      hasVisualization: true,
    },
    {
      icon: Eye,
      title: 'Powerful Visualizations',
      description: 'Create interactive dashboards and beautiful data stories.',
      size: 'medium',
      hasPieChart: true,
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Enterprise-grade security and compliance built in.',
      size: 'small',
    },
    {
      icon: Code2,
      title: 'Developer Friendly',
      description: 'APIs, SDKs, and docs to build faster and smarter.',
      size: 'small',
      hasCode: true,
    },
  ]

  const services = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines that scale with your business.',
    },
    {
      icon: LineChart,
      title: 'Analytics & BI',
      description: 'Transform raw data into actionable insights.',
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Migrate your data to the cloud with zero hassle.',
    },
    {
      icon: Settings,
      title: 'Managed Services',
      description: 'We manage your platform so you can focus on insights.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      price: 'Free',
      period: '',
      features: [
        'Up to 1M events per month',
        '7 day data retention',
        '3 team members',
        'Community support',
        'Basic dashboards',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'For growing teams that need more power',
      price: '$99',
      period: '/month',
      features: [
        'Up to 100M events per month',
        '90 day data retention',
        'Unlimited team members',
        'Priority support',
        'Advanced visualizations',
        'Custom alerts',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For organizations with complex needs',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited events',
        'Unlimited retention',
        'Dedicated support',
        'SLA guarantee',
        'SSO & SAML',
        'Custom integrations',
        'On-premise option',
        'Audit logs',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  const testimonials = [
    {
      quote: "Dataflow Analytics transformed how we understand our customers. The real-time insights have been game-changing for our product decisions.",
      author: 'Head of Data',
      company: 'TechCorp',
      rating: 5,
    },
    {
      quote: "The query performance is incredible. What used to take minutes now takes milliseconds. Our analysts are more productive than ever.",
      author: 'VP of Engineering',
      company: 'ScaleUp Inc',
      rating: 5,
    },
    {
      quote: "Finally, an analytics platform that developers actually enjoy using. The APIs are intuitive and the documentation is excellent.",
      author: 'Lead Developer',
      company: 'DevFirst Labs',
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 14-day free trial of our Pro plan. No credit card required. You get full access to all Pro features and can downgrade or upgrade at any time.',
    },
    {
      question: 'What data sources can I connect?',
      answer: 'Dataflow supports over 150 data sources including databases, cloud services, APIs, and custom integrations. Common sources include PostgreSQL, MySQL, Snowflake, BigQuery, and AWS services.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption at rest and in transit. We are SOC 2 Type II certified and GDPR compliant. Your data never leaves your control.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes, you can export your data at any time in multiple formats including CSV, JSON, and Parquet. We believe your data belongs to you.',
    },
    {
      question: 'What support options are available?',
      answer: 'Starter plans include community support. Pro plans get priority email support with 24-hour response time. Enterprise plans include dedicated support with custom SLAs.',
    },
  ]

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
    Resources: ['Documentation', 'API Reference', 'Tutorials', 'Blog', 'Community'],
    Company: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0A0F1C', color: '#E2E8F0' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ backgroundColor: 'rgba(10, 15, 28, 0.8)', borderBottom: '1px solid rgba(99, 102, 241, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">Dataflow Analytics</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href || '#'}
                  className="flex items-center gap-1 px-4 py-2 text-sm transition-colors hover:text-white"
                  style={{ color: '#64748B' }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="#pricing" className="text-sm hover:text-white transition-colors" style={{ color: '#64748B' }}>
                Log in
              </Link>
              <Button 
                className="text-sm font-medium"
                style={{ backgroundColor: '#6366F1', color: 'white' }}
              >
                Get started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/5"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#0A0F1C' }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="#pricing" className="block px-4 py-3 text-center rounded-lg hover:bg-white/5 transition-colors">
                Log in
              </Link>
              <Button className="w-full" style={{ backgroundColor: '#6366F1' }}>
                Get started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30"
            style={{ 
              background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <Badge 
            className="mb-6 px-4 py-2 text-sm font-medium"
            style={{ 
              backgroundColor: 'rgba(99, 102, 241, 0.1)', 
              color: '#6366F1',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}
          >
            <span className="w-2 h-2 rounded-full mr-2 inline-block" style={{ backgroundColor: '#22C55E' }} />
            Real-time analytics for modern data teams
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Turn data into
            <br />
            <span style={{ color: '#6366F1' }}>real-time</span> decisions
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: '#64748B' }}>
            Dataflow Analytics is the high-performance analytics platform built for speed, scale, and clarity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="text-base font-medium px-8 py-6 rounded-lg group"
              style={{ backgroundColor: '#6366F1' }}
            >
              Start free trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-base font-medium px-8 py-6 rounded-lg"
              style={{ 
                backgroundColor: 'transparent', 
                borderColor: 'rgba(99, 102, 241, 0.3)',
                color: '#E2E8F0'
              }}
            >
              Book a demo
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative py-8" style={{ backgroundColor: '#131B2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                  >
                    <stat.icon className="w-5 h-5" style={{ color: '#6366F1' }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider" style={{ color: '#64748B' }}>
                    {stat.label}
                  </span>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm" style={{ color: '#64748B' }}>
                  {stat.change && (
                    <span className="text-green-400 mr-1">{stat.change}</span>
                  )}
                  {stat.changeLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Real-time Analytics - Large Card */}
            <Card 
              className="md:col-span-1 lg:row-span-2 p-6 lg:p-8 rounded-2xl border-0 overflow-hidden group"
              style={{ 
                backgroundColor: '#131B2E',
                border: '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <Zap className="w-6 h-6" style={{ color: '#6366F1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
              <p className="text-sm mb-6" style={{ color: '#64748B' }}>
                Stream and analyze data in real-time with sub-second latency.
              </p>
              {/* Mini Chart Visualization */}
              <div className="relative h-48 lg:h-64 mt-auto">
                <svg viewBox="0 0 300 150" className="w-full h-full">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 120 Q50 100 75 110 T150 80 T225 90 T300 50 L300 150 L0 150 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0 120 Q50 100 75 110 T150 80 T225 90 T300 50"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="2"
                  />
                  <circle cx="150" cy="80" r="4" fill="#6366F1" />
                  <circle cx="150" cy="80" r="8" fill="#6366F1" opacity="0.3" className="animate-ping" />
                </svg>
              </div>
            </Card>

            {/* Scalable Architecture */}
            <Card 
              className="p-6 lg:p-8 rounded-2xl border-0 overflow-hidden"
              style={{ 
                backgroundColor: '#131B2E',
                border: '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <Layers className="w-6 h-6" style={{ color: '#6366F1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
              <p className="text-sm" style={{ color: '#64748B' }}>
                Built to scale from gigabytes to petabytes effortlessly.
              </p>
              {/* 3D Cube Visualization */}
              <div className="mt-6 flex justify-end">
                <div className="relative w-24 h-24">
                  <div 
                    className="absolute inset-0 rounded-lg transform rotate-12 translate-x-2 translate-y-2"
                    style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                  />
                  <div 
                    className="absolute inset-0 rounded-lg transform rotate-6 translate-x-1 translate-y-1"
                    style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                  />
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                  />
                </div>
              </div>
            </Card>

            {/* Powerful Visualizations */}
            <Card 
              className="lg:row-span-2 p-6 lg:p-8 rounded-2xl border-0 overflow-hidden"
              style={{ 
                backgroundColor: '#131B2E',
                border: '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <Eye className="w-6 h-6" style={{ color: '#6366F1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Powerful Visualizations</h3>
              <p className="text-sm mb-6" style={{ color: '#64748B' }}>
                Create interactive dashboards and beautiful data stories.
              </p>
              {/* Pie Chart */}
              <div className="flex flex-col items-center mt-6">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1E293B" strokeWidth="12" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#6366F1" strokeWidth="12" 
                      strokeDasharray="120.64 251.2" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="12" 
                      strokeDasharray="70.37 251.2" strokeDashoffset="-120.64" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#A78BFA" strokeWidth="12" 
                      strokeDasharray="40.19 251.2" strokeDashoffset="-191.01" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#C4B5FD" strokeWidth="12" 
                      strokeDasharray="20 251.2" strokeDashoffset="-231.2" />
                  </svg>
                </div>
                <div className="mt-6 space-y-2 text-sm w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6366F1' }} />
                      <span style={{ color: '#64748B' }}>North America</span>
                    </div>
                    <span>48%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8B5CF6' }} />
                      <span style={{ color: '#64748B' }}>Europe</span>
                    </div>
                    <span>28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A78BFA' }} />
                      <span style={{ color: '#64748B' }}>Asia Pacific</span>
                    </div>
                    <span>16%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4B5FD' }} />
                      <span style={{ color: '#64748B' }}>Other</span>
                    </div>
                    <span>8%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Secure by Design */}
            <Card 
              className="p-6 lg:p-8 rounded-2xl border-0"
              style={{ 
                backgroundColor: '#131B2E',
                border: '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <Shield className="w-6 h-6" style={{ color: '#6366F1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure by Design</h3>
              <p className="text-sm" style={{ color: '#64748B' }}>
                Enterprise-grade security and compliance built in.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Badge style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22C55E' }}>SOC 2</Badge>
                <Badge style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22C55E' }}>GDPR</Badge>
                <Badge style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22C55E' }}>HIPAA</Badge>
              </div>
            </Card>

            {/* Developer Friendly */}
            <Card 
              className="p-6 lg:p-8 rounded-2xl border-0"
              style={{ 
                backgroundColor: '#131B2E',
                border: '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <Code2 className="w-6 h-6" style={{ color: '#6366F1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
              <p className="text-sm mb-4" style={{ color: '#64748B' }}>
                APIs, SDKs, and docs to build faster and smarter.
              </p>
              {/* Code Preview */}
              <div 
                className="rounded-lg p-4 font-mono text-xs overflow-hidden"
                style={{ backgroundColor: '#0A0F1C' }}
              >
                <div className="flex gap-1.5 mb-3">
                  <span className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <code style={{ color: '#64748B' }}>
                  <span style={{ color: '#6366F1' }}>const</span> data = <span style={{ color: '#22C55E' }}>await</span> df.query(...)
                </code>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="mb-4"
              style={{ 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                color: '#6366F1',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive analytics services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              End-to-end solutions to help you collect, analyze, and act on your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 rounded-2xl border-0 hover:translate-y-[-4px] transition-all duration-300 group cursor-pointer"
                style={{ 
                  backgroundColor: '#131B2E',
                  border: '1px solid rgba(99, 102, 241, 0.1)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                >
                  <service.icon className="w-7 h-7" style={{ color: '#6366F1' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  {service.description}
                </p>
                <div className="mt-6 relative h-24 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{ 
                      background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)`
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32" style={{ backgroundColor: '#131B2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="mb-4"
              style={{ 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                color: '#6366F1',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              PRICING
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index}
                className={`p-8 rounded-2xl border-0 relative ${tier.highlighted ? 'lg:scale-105' : ''}`}
                style={{ 
                  backgroundColor: tier.highlighted ? '#1E293B' : '#0A0F1C',
                  border: tier.highlighted ? '2px solid #6366F1' : '1px solid rgba(99, 102, 241, 0.1)'
                }}
              >
                {tier.highlighted && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#6366F1' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-sm mb-6" style={{ color: '#64748B' }}>{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl lg:text-5xl font-bold">{tier.price}</span>
                    {tier.period && <span style={{ color: '#64748B' }}>{tier.period}</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#22C55E' }} />
                      <span className="text-sm" style={{ color: '#E2E8F0' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full py-6 rounded-lg font-medium"
                  style={{ 
                    backgroundColor: tier.highlighted ? '#6366F1' : 'transparent',
                    border: tier.highlighted ? 'none' : '1px solid rgba(99, 102, 241, 0.3)',
                    color: '#E2E8F0'
                  }}
                >
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="mb-4"
              style={{ 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                color: '#6366F1',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              TESTIMONIALS
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Trusted by data teams worldwide
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <Card 
              className="p-8 lg:p-12 rounded-2xl border-0 text-center"
              style={{ 
                backgroundColor: '#131B2E',
                border: '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
                <p style={{ color: '#64748B' }}>{testimonials[activeTestimonial].company}</p>
              </div>
            </Card>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial ? 'w-8' : ''
                    }`}
                    style={{ 
                      backgroundColor: index === activeTestimonial ? '#6366F1' : 'rgba(99, 102, 241, 0.3)'
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32" style={{ backgroundColor: '#131B2E' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="mb-4"
              style={{ 
                backgroundColor: 'rgba(99, 102, 241, 0.1)', 
                color: '#6366F1',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}
            >
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden"
                style={{ 
                  backgroundColor: '#0A0F1C',
                  border: '1px solid rgba(99, 102, 241, 0.1)'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                  >
                    {openFaq === index ? (
                      <Minus className="w-4 h-4" style={{ color: '#6366F1' }} />
                    ) : (
                      <Plus className="w-4 h-4" style={{ color: '#6366F1' }} />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6" style={{ color: '#64748B' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#0A0F1C' }}>
        <div 
          className="absolute inset-0 opacity-50"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)'
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your data?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Join thousands of data teams using Dataflow Analytics to make better decisions, faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="text-base font-medium px-8 py-6 rounded-lg group"
              style={{ backgroundColor: '#6366F1' }}
            >
              Start your free trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-base font-medium px-8 py-6 rounded-lg"
              style={{ 
                backgroundColor: 'transparent', 
                borderColor: 'rgba(99, 102, 241, 0.3)',
                color: '#E2E8F0'
              }}
            >
              Talk to sales
            </Button>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#64748B' }}>
            No credit card required. 14-day free trial.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-20" style={{ backgroundColor: '#131B2E', borderTop: '1px solid rgba(99, 102, 241, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg">Dataflow Analytics</span>
              </Link>
              <p className="text-sm mb-6 max-w-xs" style={{ color: '#64748B' }}>
                The high-performance analytics platform built for speed, scale, and clarity.
              </p>
              <div className="flex items-center gap-3">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-none text-sm"
                  style={{ backgroundColor: '#0A0F1C', color: '#E2E8F0' }}
                />
                <Button style={{ backgroundColor: '#6366F1' }}>Subscribe</Button>
              </div>
            </div>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link 
                        href="#"
                        className="text-sm hover:text-white transition-colors"
                        style={{ color: '#64748B' }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div 
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(99, 102, 241, 0.1)' }}
          >
            <p className="text-sm" style={{ color: '#64748B' }}>
              © 2024 Dataflow Analytics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: '#64748B' }}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: '#64748B' }}>
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-white transition-colors" style={{ color: '#64748B' }}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}