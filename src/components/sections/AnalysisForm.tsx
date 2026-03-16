import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Send, Shield } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/hooks/use-toast'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  type: z.string({ required_error: 'Por favor, selecione o tipo.' }),
  previousAttempt: z.enum(['sim', 'nao'], { required_error: 'Responda esta pergunta.' }),
  message: z.string().optional(),
})

export function AnalysisForm() {
  const { toast } = useToast()
  const { ref, isVisible } = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Informações Recebidas',
        description: 'Nossa equipe jurídica entrará em contato em breve.',
      })
      form.reset()
    }, 2000)
  }

  return (
    <section id="contato" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary" />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              'text-center mb-10 text-white invisible',
              isVisible && 'animate-fade-in-up',
            )}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Solicite uma Análise do Seu Caso
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo para que nossa equipe avalie as possibilidades jurídicas
              relacionadas ao seu benefício.
            </p>
          </div>

          <Card
            className={cn('shadow-2xl border-none invisible', isVisible && 'animate-fade-in-up')}
            style={{ animationDelay: '200ms' }}
          >
            <CardContent className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="João da Silva" className="bg-muted/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(11) 99999-9999"
                              className="bg-muted/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="joao@exemplo.com"
                              className="bg-muted/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Condição / Deficiência</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted/50">
                                <SelectValue placeholder="Selecione o motivo..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="idoso">Pessoa Idosa (65+ anos)</SelectItem>
                              <SelectItem value="deficiencia">
                                Pessoa com Deficiência Física/Motora
                              </SelectItem>
                              <SelectItem value="autismo">
                                Transtorno do Espectro Autista (TEA)
                              </SelectItem>
                              <SelectItem value="mental">Deficiência Intelectual/Mental</SelectItem>
                              <SelectItem value="outros">
                                Outros / Desejo detalhar abaixo
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="previousAttempt"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Você já solicitou este benefício no INSS antes?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="sim" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Sim, já solicitei e foi negado.
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="nao" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Não, será a minha primeira tentativa.
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição do Caso (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva brevemente a situação ou o motivo da negativa..."
                            className="resize-none bg-muted/50 h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base h-14 shadow-gold bg-accent hover:bg-accent/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Informações para Análise
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground bg-muted/30 py-2 rounded-md">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Seus dados estão protegidos conforme a LGPD.</span>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
